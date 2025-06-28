import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";
import  '../components/cardPizza.css';

export const Pizza = () => {
    const [pizza, setPizza] = useState({
        id: '',
        name: '',
        desc: '',
        price: 0,
        ingredients: [],
        img: null
    });
    
      useEffect(() => {
        consultarApi();
      }, []);
    
      const consultarApi = async () => {
      const url = "http://localhost:5000/api/pizzas/p001";
      const response = await fetch(url);
      const data = await response.json();
      setPizza(data); 
      };

  return (
    <main>
        <div className="container-card">
        <CardPizza
        key={pizza.id}
        name={pizza.name}
        desc={pizza.desc}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}/>
        </div>
    </main>

  )
}

export default Pizza;
