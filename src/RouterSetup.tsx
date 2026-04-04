import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import ForgotPassword from './features/auth/ForgotPassword';
import Home from './features/home/Home';
import ProtectedRoute from './components/ProtectedRoute';
import CategoryPage from './features/category/CategoryPage';
import ProductDetailPage from './features/product/ProductDetailPage';
import PartnerPage from './features/partner/PartnerPage';
import PrivacyPolicyPage from './features/privacy/PrivacyPolicyPage';
import SupportPage from './features/support/SupportPage';
import AboutPage from './features/about/AboutPage';
import OffersPage from './features/offers/OffersPage';

// New Features (Azure Gusto)
import RestaurantProfilePage from './features/restaurant/RestaurantProfilePage';
import SearchResultsPage from './features/search/SearchResultsPage';
import LiveTrackingPage from './features/tracking/LiveTrackingPage';
import NotificationsPage from './features/notifications/NotificationsPage';
import ReviewManagementPage from './features/merchant/ReviewManagementPage';
import StoreSettingsPage from './features/merchant/StoreSettingsPage';
import NotFoundPage from './features/error/NotFoundPage';
import EmptyCart from './features/cart/EmptyCart';

// Customer & Checkout
import OrderHistoryPage from './features/customer/OrderHistoryPage';
import UserProfilePage from './features/customer/UserProfilePage';
import AccountSettingsPage from './features/customer/AccountSettingsPage';
import OrderRatingPage from './features/customer/OrderRatingPage';
import CheckoutPage from './features/checkout/CheckoutPage';
import PaymentMethodsPage from './features/checkout/PaymentMethodsPage';
import OrderConfirmationPage from './features/checkout/OrderConfirmationPage';

// Merchant
import MerchantDashboardPage from './features/merchant/MerchantDashboardPage';
import MenuManagementPage from './features/merchant/MenuManagementPage';
import OrderListPage from './features/merchant/OrderListPage';
import MonthlyReportsPage from './features/merchant/MonthlyReportsPage';
import InventoryControlPage from './features/merchant/InventoryControlPage';

// Driver
import DriverDashboardPage from './features/driver/DriverDashboardPage';
import ActiveDeliveryPage from './features/driver/ActiveDeliveryPage';
import DriverWalletPage from './features/driver/DriverWalletPage';
import DriverHeatmapPage from './features/driver/DriverHeatmapPage';
import DriverKYCPage from './features/driver/DriverKYCPage';

// Admin
import AdminDashboardPage from './features/admin/AdminDashboardPage';
import ShipperManagementPage from './features/admin/ShipperManagementPage';
import LiveOrderManagementPage from './features/admin/LiveOrderManagementPage';
import AccountManagementPage from './features/admin/AccountManagementPage';
import PaymentManagementPage from './features/admin/PaymentManagementPage';
import DisputeCenterPage from './features/admin/DisputeCenterPage';
import CommissionSettingsPage from './features/admin/CommissionSettingsPage';

const router = createBrowserRouter([
  // ==========================================
  // PUBLIC ROUTES (Ai cũng vào được)
  // ==========================================
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/', element: <Home /> },
  { path: '/category/:categoryId', element: <CategoryPage /> },
  { path: '/product/:id', element: <ProductDetailPage /> },
  { path: '/partner', element: <PartnerPage /> },
  { path: '/privacy', element: <PrivacyPolicyPage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/offers', element: <OffersPage /> },
  { path: '/restaurant/:id', element: <RestaurantProfilePage /> },
  { path: '/search', element: <SearchResultsPage /> },
  { path: '/cart-empty-test', element: <EmptyCart /> },

  // ==========================================
  // CUSTOMER ROUTES (Yêu cầu đăng nhập, thường là ROLE "CUSTOMER")
  // ==========================================
  {
    // Cấp quyền cho CUSTOMER (hoặc ai đã login tùy ý thiết kế, ở đây ta phân quyền cụ thể CUSTOMER)
    // Nếu bạn muốn ai cũng mua được hàng thì bỏ allowedRoles, chỉ cần check login
    element: <ProtectedRoute allowedRoles={['CUSTOMER']} />,
    children: [
      { path: '/customer/orders', element: <OrderHistoryPage /> },
      { path: '/customer/profile', element: <UserProfilePage /> },
      { path: '/customer/settings', element: <AccountSettingsPage /> },
      { path: '/customer/rating/:orderId', element: <OrderRatingPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/checkout/payment', element: <PaymentMethodsPage /> },
      { path: '/checkout/success', element: <OrderConfirmationPage /> },
      { path: '/tracking/:orderId', element: <LiveTrackingPage /> },
      { path: '/notifications', element: <NotificationsPage /> },
    ]
  },

  // ==========================================
  // MERCHANT ROUTES (Chỉ Chủ nhà hàng / Quán ăn)
  // ==========================================
  {
    element: <ProtectedRoute allowedRoles={['MERCHANT']} />,
    children: [
      { path: '/merchant/dashboard', element: <MerchantDashboardPage /> },
      { path: '/merchant/menu', element: <MenuManagementPage /> },
      { path: '/merchant/orders', element: <OrderListPage /> },
      { path: '/merchant/reviews', element: <ReviewManagementPage /> },
      { path: '/merchant/reports', element: <MonthlyReportsPage /> },
      { path: '/merchant/inventory', element: <InventoryControlPage /> },
      { path: '/merchant/settings', element: <StoreSettingsPage /> },
    ]
  },

  // ==========================================
  // DRIVER ROUTES (Chỉ Tài xế)
  // ==========================================
  {
    element: <ProtectedRoute allowedRoles={['DRIVER']} />,
    children: [
      { path: '/driver/dashboard', element: <DriverDashboardPage /> },
      { path: '/driver/active', element: <ActiveDeliveryPage /> },
      { path: '/driver/wallet', element: <DriverWalletPage /> },
      { path: '/driver/heatmap', element: <DriverHeatmapPage /> },
      { path: '/driver/kyc', element: <DriverKYCPage /> },
    ]
  },

  // ==========================================
  // ADMIN ROUTES (Quản trị viên)
  // ==========================================
  {
    element: <ProtectedRoute allowedRoles={['ADMIN']} />,
    children: [
      { path: '/admin/dashboard', element: <AdminDashboardPage /> },
      { path: '/admin/shippers', element: <ShipperManagementPage /> },
      { path: '/admin/live-orders', element: <LiveOrderManagementPage /> },
      { path: '/admin/accounts', element: <AccountManagementPage /> },
      { path: '/admin/payments', element: <PaymentManagementPage /> },
      { path: '/admin/disputes', element: <DisputeCenterPage /> },
      { path: '/admin/settings', element: <CommissionSettingsPage /> },
    ]
  },

  { path: '/orders', element: <OrdersRedirect /> },
  // Catch all 404
  { path: '*', element: <NotFoundPage /> }
]);

function OrdersRedirect() {
  const { user } = useSelector((state: any) => state.auth);
  if (!user) return <Navigate to="/login" replace />;
  if (user.role === 'MERCHANT') return <Navigate to="/merchant/orders" replace />;
  if (user.role === 'DRIVER') return <Navigate to="/driver/dashboard" replace />;
  if (user.role === 'ADMIN') return <Navigate to="/admin/dashboard" replace />;
  return <Navigate to="/customer/orders" replace />;
}

const RouterSetup = () => {
  return <RouterProvider router={router} />;
};

export default RouterSetup;
