import './navbar.css';
import {formatPrice} from '../assets/helpers/formatPrice';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';


const Navbar = () => {
  const { getTotal } = useContext(CartContext);
  const token = false;
  return (
    <>
      <div className="contenedor">
        <h2 className='titulo'>Pizzería Mamma Mia!</h2>
        <div className="contenedor-menu">
          <ul className="menu">
            <li> <Link to="/" className='link-nav' >🍕Home</Link> </li>
            <li> <Link to="/profile" className='link-nav' > Profile👤</Link></li>
            <li> <Link  to="/login" className='link-nav' > {token ? '🔓Profile' : '🔐Login'} </Link> </li>
            <li> <Link to="/register" className='link-nav' >{token ? '🔒Logout' : '🔐Register'}</Link> </li>
            <li className="op-total" > <Link to="/cart" className='link-nav' >🛒Total: {formatPrice(getTotal())}</Link> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar