import { useEffect, useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';

function Shop() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();

  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then((res) => setProducts(res.data))
      .catch((err) => console.error('Fehler beim Laden der Produkte:', err));
  }, []);

  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="border rounded-xl p-4 shadow hover:shadow-lg transition">
          <img src={product.image_url} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-blue-600 font-semibold mt-2">{product.price} €</p>
          <button
            onClick={() => addToCart(product)}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            In den Warenkorb
          </button>
        </div>
      ))}
    </div>
  );
}

export default Shop;
