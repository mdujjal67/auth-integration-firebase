import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Providers/AuthProvider';
import { Toaster } from 'react-hot-toast';
import YourSecrets from './Components/Your Secret/YourSecrets';
import PrivateRoutes from './Components/Routes/PrivateRoutes';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import Profile from './Components/Profile/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFoundPage></NotFoundPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/secrets",
        element: <PrivateRoutes><YourSecrets></YourSecrets></PrivateRoutes>
      },
      {
        path: "/profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
