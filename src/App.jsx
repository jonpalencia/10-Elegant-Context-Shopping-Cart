import CartContextComponent from './store/shopping-cart-context.jsx';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <CartContextComponent>
      <Header />
      <Shop />
    </CartContextComponent>
  );
}

export default App;
