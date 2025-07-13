import './navbar.css';
import {formatPrice} from '../assets/helpers/formatPrice';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { UserContext } from '../context/userContext';


const Navbar = () => {
  const { getTotal } = useContext(CartContext);
  const { userToken, logoutUser } = useContext(UserContext);
  
  return (
    <>
      <div className="contenedor">
        <h2 className='titulo'>Pizzería Mamma Mia!</h2>
        <div className="contenedor-menu">
          <ul className="menu">
            <li> <Link to="/" className='link-nav' >🍕Home</Link> </li>
            {userToken ? (
              <>
                <li><Link to="/profile" className="link-nav">👤Profile</Link></li>
                <li><Link to="/" onClick={logoutUser} className="link-nav">🔒Logout</Link></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="link-nav">🔐Login</Link></li>
                <li><Link to="/register" className="link-nav">🔐Register</Link></li>
              </>
            )}
            <li className="op-total" > <Link to="/cart" className='link-nav' >🛒Total: {formatPrice(getTotal())}</Link> </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar