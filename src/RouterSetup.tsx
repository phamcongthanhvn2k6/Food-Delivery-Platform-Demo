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
      // You can add more protected routes here mapping to other roles
    ],
  },
]);

const RouterSetup = () => {
  return <RouterProvider router={router} />;
};

export default RouterSetup;
