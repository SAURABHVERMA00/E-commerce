
import './App.css';
import Footer from './Customer/Components/Footer/Footer';
import Navigation from './Customer/Components/Navigation/Navigation';
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
        <ProductDetails/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
