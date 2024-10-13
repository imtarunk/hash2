import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StarButton from './components/createWallet';
import Wallet from './components/crypto-wallet.jsx';
import Build from './components/Build.jsx';
import Mintcoint from './components/mintCoint.jsx'
// Define routes
const router = createBrowserRouter([
  {
    path: "/",  // Main path
    element: <App />,  // The root component
    children: [
      {
        path: '/',  // Nested path
        element: <StarButton />  // Component to render for /home
      }, {
        path: `/wallet`,
        element: <Wallet />
      }, {
        path: `/build`,
        element: <Build />
      }
    ]
  }, {
    path: "/build/mintcoin",  // Main path
    element: <Mintcoint />,  // The root component
  }
]);

// Render the application
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
