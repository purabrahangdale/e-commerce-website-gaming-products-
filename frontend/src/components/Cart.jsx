import "./Cart.css";

function Cart({ cartItems, setCartOpen }) {

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price,
    0
  );

  return (
    <div className="cart">

      <div className="cart-header">

        <h2>
          Shopping Cart
        </h2>

        <button
          onClick={() => setCartOpen(false)}
        >
          X
        </button>

      </div>

      <div className="cart-items">

        {
          cartItems.length === 0 ? (
            <p>
              Cart is empty
            </p>
          ) : (
            cartItems.map((item, index) => (

              <div
                className="cart-item"
                key={index}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>
                    {item.name}
                  </h4>

                  <p>
                    Rs. {item.price}
                  </p>

                </div>

              </div>

            ))
          )
        }

      </div>

      <h3 className="total">
        Total: Rs. {totalPrice}
      </h3>

    </div>
  );
}

export default Cart;
