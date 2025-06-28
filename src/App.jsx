import './App.css'
import Cart from './pages/Cart';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Pizza from './pages/Pizza';
import Register from './pages/Register';
import { Route, Routes } from 'react-router-dom';
import Profile from './components/Profile';
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
