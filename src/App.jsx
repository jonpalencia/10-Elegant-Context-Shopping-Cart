import { CartContextProvider } from './store/shopping-cart-context.jsx';
import Header from './components/Header';
import Shop from './components/Shop';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Shop />
    </CartContextProvider>
  );
}

export default App;
