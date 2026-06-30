import CartContextComponent from './store/shopping-cart-context.jsx';
import Header from './components/Header';
import Shop from './components/Shop';
import Product from './components/Product';
import { DUMMY_PRODUCTS } from './dummy-products.js';

function App() {
  return (
    <CartContextComponent>
      <Header />
      <Shop>
        {DUMMY_PRODUCTS.map(product => (
          <li key={product.id}>
            <Product {...product} />
          </li>
        ))}
      </Shop>
    </CartContextComponent>
  );
}

export default App;
