import { useContext, useState } from 'react';
import { formatPrice } from '../assets/helpers/formatPrice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../context/cartContext';
import { useUser } from '../context/UserContext';


const Cart = () => {
    const { products, addCart, removeCart, getTotal } = useContext(CartContext);
    const total = getTotal();
    const {userToken} = useUser();
    const [message, setMessage] = useState("");

    const checkout = async () => {
      if (!userToken) {
        setMessage("Por favor, inicia sesión para proceder con el pago.");
        return;
      }

      try {
        const response = await fetch('http://localhost:5000/api/checkouts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userToken}`,
          },
          body: JSON.stringify({ cart: products }),
        });

        if (!response.ok) {
          throw new Error('Error al procesar el pago');
        }
        setMessage("Pago procesado exitosamente.");

      } catch (error) {
        console.error('Error during checkout:', error);
        setMessage("Error al procesar el pago: " + error.message);
      }
    };

    return (
      <main className="container mt-4 vh-100 align-items-center justify-content-center mb-4">
        <h2 className="mb-4">Detalles del pedido:</h2>

        {products.length === 0 ? (
          <p className="text-center">Tu carrito está vacío (por ahora 😁)</p>
        ) : (
          <>
            {products.map((pizza) => (
              <div
                key={pizza.id}
                className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2">
                <div className="d-flex align-items-center gap-3">
                  <img
                    src={pizza.img}
                    alt={pizza.name}
                    style={{
                      width: '50px',
                      height: '50px',
                      objectFit: 'cover',
                      borderRadius: '5px',
                    }}
                  />
                  <span className="fw-bold text-capitalize">{pizza.name}</span>
                  <span>{formatPrice(pizza.price)}</span>
                </div>

                <div className="d-flex align-items-center gap-2">
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => removeCart(pizza.id)}
                  >
                    -
                  </button>
                  <span className="fw-bold">{pizza.count}</span>
                  <button
                    className="btn btn-outline-primary btn-sm"
                    onClick={() => addCart(pizza)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="text-start mt-4 mb-4">
              <h4>Total: {formatPrice(total)}</h4>
              <button
                className="btn btn-success mt-2"
                disabled = {!userToken}
                onClick={checkout}
              >
                Pagar
              </button>

              {message && (
                <p
                  className={`mt-2 ${
                    message.includes("éxito") ? "text-danger" : "text-success"
                  }`}
                >
                  {message}
                </p>
              )}
              {!userToken && (
                <p className="text-danger mt-2">
                  Por favor, inicia sesión para proceder con el pago.
                </p>
              )}
            </div>
          </>
        )}
      </main>
    );
  };
export default Cart