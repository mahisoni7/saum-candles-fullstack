import { useParams } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Vanilla Dream",
    price: 499,
    scent: "Vanilla",
    description:
      "A warm and comforting vanilla scented candle, perfect for relaxing evenings.",
  },
  {
    id: 2,
    name: "Rose Petal",
    price: 549,
    scent: "Rose",
    description:
      "A soft floral fragrance that brings a fresh and elegant feeling to your home.",
  },
  {
    id: 3,
    name: "Sandalwood Glow",
    price: 599,
    scent: "Sandalwood",
    description:
      "A rich sandalwood fragrance designed to create a calm and luxurious atmosphere.",
  },
  {
    id: 4,
    name: "Lavender Calm",
    price: 449,
    scent: "Lavender",
    description:
      "A soothing lavender candle made for peaceful and relaxing moments.",
  },
  {
    id: 5,
    name: "Cinnamon Chai",
    price: 529,
    scent: "Cinnamon",
    description:
      "A warm cinnamon fragrance inspired by cozy evenings and chai.",
  },
  {
    id: 6,
    name: "Midnight Oud",
    price: 699,
    scent: "Oud",
    description:
      "A deep and luxurious oud fragrance for an elegant evening atmosphere.",
  },
];

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-details">

      <div className="product-details-image">
        🕯️
      </div>

      <div className="product-details-info">

        <p>{product.scent}</p>

        <h1>{product.name}</h1>

        <h2>₹{product.price}</h2>

        <p>{product.description}</p>

        <button>Add to Cart</button>

      </div>

    </div>
  );
}

export default ProductDetails;