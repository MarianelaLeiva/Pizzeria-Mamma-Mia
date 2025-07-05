import React, { createContext, useState } from 'react'

export const CartContext = createContext();

const CartProvider = ({children}) => {
    const [products, setProducts] = useState([]);

    const addCart = (pizza) => {
    const exists = products.find((p) => p.id === pizza.id);

    if (exists) {
      const updated = products.map((p) =>
        p.id === pizza.id ? { ...p, count: p.count + 1 } : p
      );
      setProducts(updated);
    } else {
      setProducts([...products, { ...pizza, count: 1 }]);
    }
  };

    const removeCart = (id) => {
        const exists = products.find((p) => p.id === id);
        if (!exists) return;

        if (exists.count === 1) {
        setProducts(products.filter((p) => p.id !== id));
        } else {
        const updated = products.map((p) =>
            p.id === id ? { ...p, count: p.count - 1 } : p
        );
        setProducts(updated);
        }
    };

    const getTotal = () => {
        return products.reduce((acc, p) => acc + p.price * p.count, 0);
    };


  return (

    <CartContext.Provider value={{products, addCart, removeCart, getTotal}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider