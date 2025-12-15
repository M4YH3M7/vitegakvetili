import ProductItem from "./ProductItem"; 


const products = [
  {
    id: 1,
    name: "Gaming Mouse",
    price: 49.99,
    description: "High-precision gaming mouse with RGB lighting",
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 89.99,
    description: "RGB mechanical keyboard with Cherry MX switches",
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 129.99,
    description: "Premium noise-cancelling wireless headphones",
  },
  {
    id: 4,
    name: "USB-C Hub",
    price: 34.99,
    description: "Multi-port USB-C hub with HDMI and USB 3.0",
  },
  {
    id: 5,
    name: "Webcam HD",
    price: 59.99,
    description: "1080p HD webcam with auto-focus and microphone",
  },
  {
    id: 6,
    name: "Wireless Mouse Pad",
    price: 24.99,
    description: "Large gaming mouse pad with stitched edges",
  },
];

function Store({ onAddToCart }) {
  return (
    <div className="store">
      <h2>Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Store;