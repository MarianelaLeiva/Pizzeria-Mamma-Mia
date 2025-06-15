import './cardpizza.css';
import {formatPrice} from '../assets/helpers/formatPrice';

const CardPizza = ({ name, ingredients, price, img, desc }) => {
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
            <a href="#" className="btnVer">Ver Más👀</a>
            <a href="#" className="btnAñadir">Añadir🛒</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPizza