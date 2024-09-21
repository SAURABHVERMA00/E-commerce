
import './App.css';
import Cart from './Customer/Components/Cart/Cart';
import Checkout from './Customer/Components/Checkout/Checkout';
import Footer from './Customer/Components/Footer/Footer';
import Navigation from './Customer/Components/Navigation/Navigation';
import Order from './Customer/Components/Order/Order';
import OrderDetails from './Customer/Components/Order/OrderDetails';
import Product from './Customer/Components/Product/Product';
import ProductDetails from './Customer/Components/ProductDetails/ProductDetails';
import HomePage from './Customer/Pages/HomePage/HomePage';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <div>
        {/* <HomePage/> */}
        {/* <Product/> */}
        {/* <ProductDetails/> */}
        {/* <Cart/> */}
        {/* <Checkout/> */}
        {/* <Order/> */}
        <OrderDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
