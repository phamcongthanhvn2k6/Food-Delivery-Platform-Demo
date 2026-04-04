import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      // We check if the item with same ID AND same options (size, toppings) already exists
      const existingItemIndex = state.items.findIndex(
        (item) => 
          item.id === newItem.id && 
          JSON.stringify(item.options) === JSON.stringify(newItem.options)
      );

      state.totalQuantity += newItem.quantity;
      state.totalAmount += newItem.price * newItem.quantity;

      if (existingItemIndex === -1) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price * newItem.quantity,
          name: newItem.name,
          imageUrl: newItem.imageUrl,
          options: newItem.options // { size, toppings, instructions }
        });
      } else {
        const existingItem = state.items[existingItemIndex];
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price * newItem.quantity;
      }
    },
    removeItem(state, action) {
      const { id, options } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => 
          item.id === id && 
          JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        state.totalQuantity -= existingItem.quantity;
        state.totalAmount -= existingItem.totalPrice;
        state.items.splice(existingItemIndex, 1);
      }
    },
    updateQuantity(state, action) {
      const { id, options, quantity } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => 
          item.id === id && 
          JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingItemIndex > -1) {
        const existingItem = state.items[existingItemIndex];
        const diff = quantity - existingItem.quantity;
        
        existingItem.quantity = quantity;
        existingItem.totalPrice = existingItem.price * quantity;
        
        state.totalQuantity += diff;
        state.totalAmount += (diff * existingItem.price);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
