import CardPizza from "../components/CardPizza";
import { useEffect, useState } from "react";
import  '../components/cardPizza.css';
import { useParams } from "react-router-dom";

export const Pizza = () => {
    const [pizza, setPizza] = useState({
        id: '',
        name: '',
        desc: '',
        price: 0,
        ingredients: [],
        img: null
    });

    const [error, setError] = useState(null);

    const {id} = useParams();
    
    useEffect(() => {
      const consultarAPI = async () => {
        const url = "http://localhost:5000/api/pizzas";
        try {
          const response = await fetch(`${url}/${id}`);
          if (!response.ok) {
            throw new Error ("No se encontro ninguna Pizza");
          }
          const data = await response.json();
          setPizza(data); 
          setError(null);
        } catch (err) {
          setError(err.message);
          setPizza(null);
        }
      }
      consultarAPI();
    }, []);

  return (
    <main>
        <div className="card mx-auto" style={{ width: '30rem' }}>
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
