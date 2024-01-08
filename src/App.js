import './App.css';
import Header from './containers/Header';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductListing from './containers/ProductListing';
import ProductDetails from './containers/ProductDetails';
function App() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path='/' exact element={<ProductListing />} />
          <Route path='/product/:productId' exact element={<ProductDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
