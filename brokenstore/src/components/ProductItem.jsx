function ProductItem({ product, onAddToCart }) {
  return (
    <div className="product-item">
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">${product.price.toFixed(2)}</p>
      </div>
      <button className="add-to-cart-button" onClick={onAddToCart(product)}>
        Add to Cart
      </button>
    </div>
  );
}


export default ProductItem;
