import './navbar.css';

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <>
      <div className="contenedor">
        <h2 className='titulo'>Pizzería Mamma Mia!</h2>
        <div className="contenedor-menu">
          <ul className="menu">
            <li>🍕Home</li>
            <li>{token ? '🔓Profile' : '🔐Login'}</li>
            <li>{token ? '🔒Logout' : '🔐Register'}</li>
            <li className="op-total">🛒Total: ${total}</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar