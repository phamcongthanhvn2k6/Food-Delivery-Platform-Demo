import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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
// Note: CartDrawer and EmptyCart are typically nested components or modals, 
// but can be routed if needed. For now we will add a route for EmptyCart for testing.
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
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/forgot-password',
    element: <ForgotPassword />,
  },
  {
    // @ts-expect-error: allowedRoles is optional but TS expects it
    element: <ProtectedRoute />, 
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/category/:categoryId',
        element: <CategoryPage />,
      },
      {
        path: '/product/:id',
        element: <ProductDetailPage />,
      },
      {
        path: '/partner',
        element: <PartnerPage />,
      },
      {
        path: '/privacy',
        element: <PrivacyPolicyPage />,
      },
      {
        path: '/support',
        element: <SupportPage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/offers',
        element: <OffersPage />,
      },
      
      // Mới thêm
      {
        path: '/restaurant/:id',
        element: <RestaurantProfilePage />
      },
      {
        path: '/search',
        element: <SearchResultsPage />
      },
      {
        path: '/tracking/:orderId',
        element: <LiveTrackingPage />
      },
      {
        path: '/notifications',
        element: <NotificationsPage />
      },
      {
        path: '/merchant/reviews',
        element: <ReviewManagementPage />
      },
      {
        path: '/merchant/settings',
        element: <StoreSettingsPage />
      },
      {
        path: '/cart-empty-test',
        element: <EmptyCart />
      },
      
      // Customer & Checkout
      { path: '/customer/orders', element: <OrderHistoryPage /> },
      { path: '/customer/profile', element: <UserProfilePage /> },
      { path: '/customer/settings', element: <AccountSettingsPage /> },
      { path: '/customer/rating/:orderId', element: <OrderRatingPage /> },
      { path: '/checkout', element: <CheckoutPage /> },
      { path: '/checkout/payment', element: <PaymentMethodsPage /> },
      { path: '/checkout/success', element: <OrderConfirmationPage /> },
      
      // Merchant
      { path: '/merchant/dashboard', element: <MerchantDashboardPage /> },
      { path: '/merchant/menu', element: <MenuManagementPage /> },
      { path: '/merchant/orders', element: <OrderListPage /> },
      { path: '/merchant/reports', element: <MonthlyReportsPage /> },
      { path: '/merchant/inventory', element: <InventoryControlPage /> },
      
      // Driver
      { path: '/driver/dashboard', element: <DriverDashboardPage /> },
      { path: '/driver/active', element: <ActiveDeliveryPage /> },
      { path: '/driver/wallet', element: <DriverWalletPage /> },
      { path: '/driver/heatmap', element: <DriverHeatmapPage /> },
      { path: '/driver/kyc', element: <DriverKYCPage /> },
      
      // Admin
      { path: '/admin/dashboard', element: <AdminDashboardPage /> },
      { path: '/admin/shippers', element: <ShipperManagementPage /> },
      { path: '/admin/live-orders', element: <LiveOrderManagementPage /> },
      { path: '/admin/accounts', element: <AccountManagementPage /> },
      { path: '/admin/payments', element: <PaymentManagementPage /> },
      { path: '/admin/disputes', element: <DisputeCenterPage /> },
      { path: '/admin/settings', element: <CommissionSettingsPage /> },
    ],
  },
  // Catch all 404
  {
    path: '*',
    element: <NotFoundPage />
  }
]);

const RouterSetup = () => {
  return <RouterProvider router={router} />;
};

export default RouterSetup;
