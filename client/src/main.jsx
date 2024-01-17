import React from 'react'
import ReactDOM from 'react-dom/client'
import "react-toastify/dist/ReactToastify.css";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { CartProvider } from './components/context/CartContext.jsx'
import { AuthProvider } from './components/context/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <AuthProvider>
    <App />
    </AuthProvider>
    </CartProvider>
  </React.StrictMode>,
)
