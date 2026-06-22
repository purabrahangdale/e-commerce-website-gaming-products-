import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

/* Components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/* Pages */
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Website Routes */}
      <Routes>

        {/* Home Page */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Products Page */}
        <Route
          path="/products"
          element={<Products />}
        />

        {/* Dynamic Product Details Page */}
        <Route
          path="/products/:id"
          element={<ProductDetails />}
        />

        {/* About Page */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={<Contact />}
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={<Login />}
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={<Register />}
        />

      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;