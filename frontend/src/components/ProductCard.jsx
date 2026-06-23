import "./ProductCard.css";

function ProductCard(props) {

  return (
    <div className="product-card">

      <img
        src={props.image}
        alt={props.name}
      />

      <h2>
        {props.name}
      </h2>

      <p className="category">
        {props.category}
      </p>

      <p className="price">
        Rs. {props.price}
      </p>

      <button
        onClick={() => props.addToCart(props)}
      >
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;
