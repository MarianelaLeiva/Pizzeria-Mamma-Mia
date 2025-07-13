import './cardpizza.css';
import { formatPrice } from '../assets/helpers/formatPrice';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { useNavigate } from 'react-router-dom';

const CardPizza = ({ id, img, name, price, ingredients, desc }) => {
  const { addCart } = useContext(CartContext);

  const handleAdd = () => {
    const pizza = {id, name, price, img, count: 1};
    addCart(pizza); 
    Swal.fire("Pizza añadida!", "Ya está en el carrito 🛒", "success");
  };

  const navigate = useNavigate();
    const goToPizza = () => {
      navigate(`/pizzas/${id}`);
    }
  

  return (
    <>
      <div className="card">
        <img className="image-card" src={img} alt={name}/>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className='description'>{desc}</p>
          <div className='card-ingredients'>
            <h4 className='title'>Ingredientes:</h4>
              <ul className='list-ingredients'>
                {ingredients.map((ingrediente, index) => (
                <li key={index}>🍕{ingrediente}</li>))}
              </ul>
          </div>
          <p className="card-price">Precio: {formatPrice(price)}</p>
          <div className='btnes'>
            <button className="btnVer" onClick={goToPizza}>Ver Más👀</button>
            <button className="btnAñadir" onClick={handleAdd}>Añadir🛒</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizza