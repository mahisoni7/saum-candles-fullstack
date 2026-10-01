import { useCart } from "../context/CartContext";

const products = [
  {
    id: 1,
    name: "Vanilla Dream",
    price: 499,
    scent: "Vanilla"
  },
  {
    id: 2,
    name: "Rose Petal",
    price: 549,
    scent: "Rose"
  },
  {
    id: 3,
    name: "Sandalwood Glow",
    price: 599,
    scent: "Sandalwood"
  },
  {
    id: 4,
    name: "Lavender Calm",
    price: 449,
    scent: "Lavender"
  },
  {
    id: 5,
    name: "Cinnamon Chai",
    price: 529,
    scent: "Cinnamon"
  },
  {
    id: 6,
    name: "Midnight Oud",
    price: 699,
    scent: "Oud"
  }
];

function Products() {

  const { addToCart } = useCart();

  return (
    <div className="shop">

      <h1>Our Candles</h1>

      <div className="products">

        {products.map((product) => (

          <div className="product-card" key={product.id}>

            <div className="product-placeholder">
              🕯️
            </div>

            <h3>{product.name}</h3>

            <p>{product.scent}</p>

            <h3>₹{product.price}</h3>

            <button onClick={() => addToCart(product)}>
              Add to Cart
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Products;