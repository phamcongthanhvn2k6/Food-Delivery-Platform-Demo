import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './features/auth/Login';
import Register from './features/auth/Register';
import ForgotPassword from './features/auth/ForgotPassword';
import Home from './features/home/Home';
import ProtectedRoute from './components/ProtectedRoute';

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
      // You can add more protected routes here mapping to other roles
    ],
  },
]);

const RouterSetup = () => {
  return <RouterProvider router={router} />;
};

export default RouterSetup;
