import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { supabase } from '../../services/supabaseClient';
import { addItem } from '../../store/cartSlice';


interface Size {
  name: string;
  priceModifier: number;
}

interface Topping {
  name: string;
  price: number;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  imageUrl: string;
  rating: number;
  sizes?: Size[];
  extraToppings?: Topping[];
  tags?: string[];
  preparationTime?: string;
}

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  // @ts-expect-error typescript store is loosely typed
  const user = useSelector((state) => state.auth.user);

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  // Form states
  const [selectedSize, setSelectedSize] = useState<number>(0);
  const [selectedToppings, setSelectedToppings] = useState<number[]>([]);
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [quantity, setQuantity] = useState(1);

  // Related products
  const [pairings, setPairings] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        setLoading(true);
        
        // 1. Fetch single product by ID
        const { data: item, error } = await supabase
          .from('menuitems')
          .select(`
            itemid,
            itemname,
            description,
            price,
            imageurl,
            isavailable,
            categoryid
          `)
          .eq('itemid', id)
          .single();


        if (error) throw error;

        // Fetch category name for the breadcrumb/pairing
        const { data: catData } = await supabase
          .from('menucategories')
          .select('name')
          .eq('categoryid', item.categoryid)
          .single();


        const formattedProduct: Product = {
          id: `${item.itemid}`,
          name: item.itemname,
          description: item.description,
          price: item.price,
          category: catData?.name || 'General',
          imageUrl: item.imageurl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
          rating: 4.8, // Default rating as we don't have item-specific ratings yet
          sizes: [],
          extraToppings: [],
          tags: ["Special"],
          preparationTime: "20-30 min"
        };


        setProduct(formattedProduct);

        // 2. Fetch related products from the same category
        const { data: pairingData } = await supabase
          .from('menuitems')
          .select(`
            id:itemid,
            name:itemname,
            description,
            price,
            imageurl,
            categoryid
          `)
          .eq('categoryid', item.categoryid)
          .neq('itemid', id)
          .limit(4);


        if (pairingData) {
          const formattedPairings: Product[] = pairingData.map((p: any) => ({
            id: `${p.id}`,
            name: p.name,
            description: p.description,
            price: p.price,
            category: catData?.name || 'General',
            imageUrl: p.imageurl || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
            rating: 4.5
          }));
          setPairings(formattedPairings);
        }


      } catch (err) {
        console.error("Error fetching product from Supabase:", err);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchProductDetails();
  }, [id]);


  const handleToppingToggle = (index: number) => {
    setSelectedToppings(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const calculateTotal = () => {
    if (!product) return 0;
    
    let base = product.price;
    
    // Add size modifier
    if (product.sizes && product.sizes.length > 0) {
      base += product.sizes[selectedSize]?.priceModifier || 0;
    }

    // Add toppings
    if (product.extraToppings && product.extraToppings.length > 0) {
      selectedToppings.forEach(idx => {
        base += product.extraToppings![idx].price;
      });
    }

    return base * quantity;
  };

  const currentTotal = calculateTotal();

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    if (!user) {
      alert("Vui lòng đăng nhập để thêm vào giỏ hàng");
      navigate('/login');
      return;
    }
    
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: currentTotal / quantity,
      quantity: quantity,
      options: {
        size: product.sizes && product.sizes.length > 0 ? product.sizes[selectedSize].name : null,
        extraToppings: selectedToppings.map(idx => product.extraToppings![idx].name),
        specialInstructions: specialInstructions
      }
    };

    dispatch(addItem(cartItem));
    alert("Đã thêm món ăn vào giỏ hàng! 🍕");
  };

  const handleBuyNow = () => {
    if (!user) {
      alert("Vui lòng đăng nhập để mua hàng");
      navigate('/login');
      return;
    }
    
    if (!product) return;

    const cartItem = {
      id: product.id,
      name: product.name,
      imageUrl: product.imageUrl,
      price: currentTotal / quantity,
      quantity: quantity,
      options: {
        size: product.sizes && product.sizes.length > 0 ? product.sizes[selectedSize].name : null,
        extraToppings: selectedToppings.map(idx => product.extraToppings![idx].name),
        specialInstructions: specialInstructions
      }
    };

    dispatch(addItem(cartItem));
    navigate('/checkout');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <div className="flex-1 flex justify-center items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0052cc]"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <Header />
        <div className="flex-1 flex justify-center items-center py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-700">Sản phẩm không tồn tại</h2>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans text-gray-900 pb-20">
      <Header />

      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <div className="text-sm font-medium text-gray-500 mb-8 flex items-center gap-2">
           <span className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigate('/')}>Restaurants</span>
           <span className="text-gray-300">›</span>
           <span className="cursor-pointer hover:text-blue-600 transition" onClick={() => navigate(`/category/${encodeURIComponent(product.category)}`)}>{product.category}</span>
           <span className="text-gray-300">›</span>
           <span className="text-gray-900 font-bold">{product.name}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mb-16">
          {/* Left Column (Image) */}
          <div className="lg:w-[55%]">
             <div className="relative rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover aspect-[4/3]" />
                
                {product.tags && product.tags.includes("Must Try") && (
                  <div className="absolute top-6 left-6 bg-purple-600/90 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-bold shadow-lg flex items-center gap-1.5">
                    <span className="text-yellow-400">★</span> Must Try
                  </div>
                )}
             </div>
          </div>

          {/* Right Column (Details & Form) */}
          <div className="lg:w-[45%] flex flex-col">
             <div className="flex justify-between items-start mb-2">
                <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{product.name}</h1>
                <button className="text-gray-300 hover:text-red-500 transition-colors shrink-0 p-2 bg-gray-50 rounded-full">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></svg>
                </button>
             </div>

             <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-extrabold text-[#0052cc]">
                  {(product.price).toLocaleString('vi-VN')}đ
                </span>
                
                {product.preparationTime && (
                  <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg text-sm font-bold">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {product.preparationTime}
                  </div>
                )}
             </div>

             <p className="text-gray-500 text-base leading-relaxed mb-8">
               {product.description}
             </p>

             {/* Divider */}
             <hr className="border-gray-100 mb-8" />

             {/* Sizes */}
             {product.sizes && product.sizes.length > 0 && (
               <div className="mb-8">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Select Size</div>
                  <div className="grid grid-cols-3 gap-3">
                    {product.sizes.map((size, idx) => (
                      <div 
                        key={idx} 
                        onClick={() => setSelectedSize(idx)}
                        className={`border rounded-2xl p-4 text-center cursor-pointer transition-all duration-200 ${
                          selectedSize === idx 
                          ? 'border-[#0052cc] bg-blue-50/50 shadow-sm' 
                          : 'border-gray-200 hover:border-gray-300 bg-white'
                        }`}
                      >
                         <div className={`font-extrabold text-sm mb-1 ${selectedSize === idx ? 'text-[#0052cc]' : 'text-gray-700'}`}>
                           {size.name.split(' ')[0]}
                         </div>
                         <div className={`text-xs font-medium ${selectedSize === idx ? 'text-blue-600' : 'text-gray-500'}`}>
                           {size.name.split(' ').slice(1).join(' ')}
                           {size.priceModifier > 0 && ` (+${size.priceModifier.toLocaleString('vi-VN')}đ)`}
                         </div>
                      </div>
                    ))}
                  </div>
               </div>
             )}

             {/* Extra Toppings */}
             {product.extraToppings && product.extraToppings.length > 0 && (
               <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest">Extra Toppings</div>
                    <div className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded uppercase">Optional</div>
                  </div>
                  <div className="space-y-3">
                    {product.extraToppings.map((topping, idx) => {
                      const isSelected = selectedToppings.includes(idx);
                      return (
                        <div 
                           key={idx}
                           onClick={() => handleToppingToggle(idx)}
                           className="flex items-center justify-between p-4 border border-gray-100 rounded-2xl hover:bg-gray-50 cursor-pointer transition"
                        >
                           <div className="flex items-center gap-3">
                              <div className={`w-5 h-5 rounded border flex items-center justify-center transition ${isSelected ? 'bg-[#0052cc] border-[#0052cc]' : 'border-gray-300 bg-white'}`}>
                                 {isSelected && <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                              </div>
                              <span className="font-bold text-gray-700 text-sm">{topping.name}</span>
                           </div>
                           <span className="font-bold text-[#0052cc] text-sm">+{topping.price.toLocaleString('vi-VN')}đ</span>
                        </div>
                      )
                    })}
                  </div>
               </div>
             )}

             {/* Special Instructions */}
             <div className="mb-8 flex-1">
                <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Special Instructions</div>
                <textarea 
                  value={specialInstructions}
                  onChange={(e) => setSpecialInstructions(e.target.value)}
                  placeholder="e.g. Well done, no onions, extra crispy crust..."
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl p-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#0052cc]/20 focus:bg-white transition-all resize-none h-24"
                ></textarea>
             </div>

          </div>
        </div>
        
        {/* Sticky Action Bar (can be sticky on small screens or just static below) */}
        <div className="border-t border-gray-100 py-6 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
             {/* Total Pricing info */}
             <div className="flex items-center gap-8 w-full md:w-auto">
                <div>
                   <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Price</div>
                   <div className="text-3xl font-extrabold text-gray-900">{currentTotal.toLocaleString('vi-VN')}đ</div>
                </div>

                <div className="flex items-center bg-gray-50 rounded-full p-1 border border-gray-100 ml-auto md:ml-0">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:bg-white hover:shadow-sm transition font-bold text-lg"
                  >−</button>
                  <span className="w-10 text-center font-extrabold text-gray-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-full flex items-center justify-center bg-[#0052cc] text-white hover:bg-blue-700 shadow-sm transition font-bold text-lg"
                  >+</button>
                </div>
             </div>

             {/* Buttons */}
             <div className="flex gap-4 w-full md:w-auto">
                 <button 
                   onClick={handleAddToCart}
                   className="flex-1 md:flex-none bg-white border-2 border-[#0052cc] text-[#0052cc] px-8 py-3.5 rounded-full font-bold hover:bg-blue-50 transition"
                 >
                   Add to Cart
                 </button>
                 <button 
                   onClick={handleBuyNow}
                   className="flex-1 md:flex-none bg-[#0052cc] text-white px-8 py-3.5 rounded-full font-bold shadow-lg hover:bg-blue-700 hover:-translate-y-0.5 transition transform"
                 >
                   Buy Now
                 </button>
             </div>
          </div>
        </div>

        {/* Popular Pairings */}
        {pairings.length > 0 && (
          <div className="mt-20 pt-16 border-t border-gray-100">
             <div className="flex justify-between items-end mb-8">
               <h3 className="text-2xl font-extrabold text-gray-900">Popular pairings with the {product.name}</h3>
               <button className="text-sm font-bold text-[#0052cc] hover:underline flex items-center gap-1 hidden sm:flex">
                 View Full Menu <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path></svg>
               </button>
             </div>

             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {pairings.map(pair => (
                  <div key={pair.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group cursor-pointer" onClick={() => navigate(`/product/${pair.id}`)}>
                    <div className="h-40 overflow-hidden relative">
                      <img src={pair.imageUrl} alt={pair.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-2 gap-2">
                        <h4 className="font-extrabold text-gray-900 line-clamp-1">{pair.name}</h4>
                        <span className="font-bold text-[#0052cc] shrink-0">{pair.price.toLocaleString('vi-VN')}đ</span>
                      </div>
                      <p className="text-xs text-gray-500 font-medium line-clamp-2">{pair.description}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
