import { useParams } from "react-router-dom";

import "./ProductDetails.css";

function ProductDetails() {

  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "Gaming Mouse",
      category: "Accessories",
      price: 1999,

      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db",

      description:
        "Professional gaming mouse with RGB lighting and ultra-fast response."
    },

    {
      id: 2,
      name: "RGB Keyboard",
      category: "Keyboard",
      price: 3499,

      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae",

      description:
        "Mechanical RGB keyboard designed for esports gaming."
    },

    {
      id: 3,
      name: "Gaming Headset",
      category: "Audio",
      price: 4999,

      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",

      description:
        "Immersive surround sound gaming headset with noise cancellation."
    }
  ];

  const product = products.find(
    (item) => item.id === Number(id)
  );

  return (
    <div className="product-details">

      <div className="product-container">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="product-info">

          <h1>
            {product.name}
          </h1>

          <p className="category">
            {product.category}
          </p>

          <h2>
            ₹ {product.price}
          </h2>

          <p className="description">
            {product.description}
          </p>

          <button>
            Add To Cart
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;