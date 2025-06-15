import Header from "./Header";
import CardPizza from "./CardPizza";
import {pizzas} from '../assets/helpers/pizzas';
 
const Home = () => {
  return (
    <>
        <Header/>
        <div className="container-card">
          {pizzas.map((pizza, id) => (
            <CardPizza
            key={id}
            name={pizza.name}
            desc={pizza.desc}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}/>
          ))}
        </div>
    </>
  )
}

export default Home