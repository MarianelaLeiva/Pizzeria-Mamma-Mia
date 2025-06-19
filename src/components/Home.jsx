import Header from "./Header";
import CardPizza from "./CardPizza";
import { useEffect, useState } from "react";
 
const Home = () => {

  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    consultarApi();
  }, []);

  const consultarApi = async () => {
  const url = "http://localhost:5000/api/pizzas";
  const response = await fetch(url);
  const data = await response.json();
  setPizzas(data); 
  };
  return (
    <>
        <Header/>
        <div className="container-card">
          {pizzas.map((pizza) => (
            <CardPizza
            key={pizza.id}
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