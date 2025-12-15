import CartItem from "./CartItem";

function Cart({ cart, onRemove, onUpdateQuantity, onBackToStore }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <div className="cart-header">
        <h2>Your Cart</h2>
        <button className="back-button" onClick={onBackToStore}>
          Back to Store
        </button>
      </div>

      {cart.length === 0 ? (
        <h3 className="empty-cart">Your cart is empty</h3>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <CartItem 
              key={item.id} 
              item={item} 
              onRemove={onRemove}
              onUpdateQuantity={onUpdateQuantity} />
            ))}
          </div>
          <div className="cart-summary">
            <div className="total">
              <strong>Total: ${total.toFixed(2)}</strong>
            </div>
            <button className="checkout-button">Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;