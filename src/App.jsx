import './App.css'
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import Profile from './components/Profile';

import Home from './pages/Home';
import Login from './pages/Login';
import Pizza from './pages/Pizza';
import Cart from './pages/Cart';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import { useContext } from 'react';
import { UserContext } from './context/userContext';


function App() {
  const {userToken} = useContext(UserContext);
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={ userToken ? <Home /> : <Register />} />
        <Route path="/login" element={ userToken ? <Home /> : <Login />} />
        <Route path="/pizza/:id" element={<Pizza />} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/profile" element={ userToken ? <Profile /> : <Login />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
