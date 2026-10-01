import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    totalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h1>Your Cart</h1>
        <p>Your cart is currently empty.</p>
      </div>
    );
  }

  return (
    <div className="cart-page">

      <h1>Your Cart</h1>

      {cart.map((item) => (

        <div className="cart-item" key={item.id}>

          <div>
            <h3>{item.name}</h3>
            <p>{item.scent}</p>
            <p>₹{item.price}</p>
          </div>

          <div>

            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  Math.max(1, item.quantity - 1)
                )
              }
            >
              −
            </button>

            <span> {item.quantity} </span>

            <button
              onClick={() =>
                updateQuantity(
                  item.id,
                  item.quantity + 1
                )
              }
            >
              +
            </button>

          </div>

          <button
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>

        </div>

      ))}

      <h2>Total: ₹{totalPrice}</h2>

      <button>Proceed to Checkout</button>

    </div>
  );
}

export default Cart;