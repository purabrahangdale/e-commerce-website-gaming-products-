import "./products.css";
import products from "../data";

function Products() {
  return (
    <div className="products-page">

      <h1 className="products-title">
        Gaming Products
      </h1>

      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card" key={product.id}>

            <img
              src={product.image}
              alt={product.name}
            />

            <h3>{product.name}</h3>

            <p>{product.price}</p>

            <button>
              Add To Cart
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Products;