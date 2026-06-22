import { useState } from "react";

import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";

function Home() {

  const [cartItems, setCartItems] =
    useState([]);

  const [cartOpen, setCartOpen] =
    useState(false);

  const products = [

    {
      id: 1,
      name: "Gaming Mouse",
      category: "Accessories",
      price: 1999,

      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db"
    },

    {
      id: 2,
      name: "RGB Keyboard",
      category: "Keyboard",
      price: 3499,

      image:
        "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae"
    },

    {
      id: 3,
      name: "Gaming Headset",
      category: "Audio",
      price: 4999,

      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e"
    }

  ];

  function addToCart(product) {

    setCartItems([
      ...cartItems,
      product
    ]);

    setCartOpen(true);
  }

  return (

    <div>

      <Hero />

      <Categories />

      <section className="products-section">

        <h1 className="section-title">
          Trending Gaming Products
        </h1>

        <div className="products-grid">

          {
            products.map((product) => (

              <ProductCard
                key={product.id}

                id={product.id}

                name={product.name}
                category={product.category}
                price={product.price}
                image={product.image}

                addToCart={addToCart}
              />

            ))
          }

        </div>

      </section>

      {
        cartOpen && (

          <Cart
            cartItems={cartItems}
            setCartOpen={setCartOpen}
          />

        )
      }

    </div>

  );
}

export default Home;