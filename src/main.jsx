import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import './index.css'
import App from './App.jsx'
import CartProvider from './context/cartContext.jsx'
import UserProvider from './context/userContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  </StrictMode>,
)
