
import { useState } from "react";
import "./App.css";
import Store from "./components/Store";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>Tech Store</h1>
        <button className="view-cart-btn" onClick={() => setShowCart(true)}>
          View Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>
      </header>

      <Cart
        cart={cart}
        onRemove={removeFromCart}
        onUpdateQuantity={updateQuantity}
      />

      <Store onAddToCart={addToCart} />
    </div>
  );
}

export default App;
