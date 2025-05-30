import './cardpizza.css';
import {formatPrice} from '../assets/helpers/formatPrice';

const CardPizza = (props) => {
  return (
    <>
      <div className="card">
        <img className="image-card" src={props.img} alt={props.name}/>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <div className='card-ingredients'>
            <h4 className='title'>Ingredientes:</h4>
            <p>🍕{props.ingredients.join(', ')}</p>
          </div>
          <p className="card-price">Precio: {formatPrice(props.price)}</p>
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