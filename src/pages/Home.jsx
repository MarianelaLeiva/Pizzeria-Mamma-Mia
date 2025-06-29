import Header from "../components/Header";
import CardPizza from "../components/CardPizza";
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
    <main>
        <Header/>
        <div className="container-card">
          {Array.isArray(pizzas) && pizzas.length > 0 ? (
           pizzas.map((pizza) =>  (
            <CardPizza
              key={pizza.id}
              id={pizza.id}
              name={pizza.name}
              desc={pizza.desc}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}/>
          ))
          ) : (
            <p>Cargando pizzas...</p>
          )}
        </div>
    </main>
  )
}

export default Home