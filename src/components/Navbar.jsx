import './navbar.css';
import {formatPrice} from '../assets/helpers/formatPrice';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <>
      <div className="contenedor">
        <h2 className='titulo'>Pizzería Mamma Mia!</h2>
        <div className="contenedor-menu">
          <ul className="menu">
            <li> <Link to="/" >🍕Home</Link> </li>
            <li> <Link  to="/login" > {token ? '🔓Profile' : '🔐Login'} </Link> </li>
            <li> <Link to="/register" >{token ? '🔒Logout' : '🔐Register'}</Link> </li>
            <li className="op-total"> <Link to="/cart" >🛒Total: {formatPrice(total)}</Link> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar