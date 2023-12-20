import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import User from './layouts/User';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContextProvider } from './hooks/useAuth';
import Login from './layouts/Login';
import './assets/style/global.css';
import Home from './layouts/Home';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <User />,
  }
]);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <UserContextProvider>
    <RouterProvider router={router} />
    <Analytics debug={false} />
  </UserContextProvider>
);

reportWebVitals();
