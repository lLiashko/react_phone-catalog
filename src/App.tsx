import './App.scss';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer/Footer';

import Home from './components/Home/Home';
import Phones from './components/Phones/Phones';
import Tablets from './components/Tablets/Tablets';
import Accessories from './components/Accessories/Accessories';
import LikedItems from './components/LikedItems';
import ShoppingCart from './components/ShoppingCart';
import PageNotFound from './components/PageNotFound';
import ProductPagePhone from './components/ProductPagePhone';
import ProductPageTablet from './components/ProductPageTablet';
import ProductPageAccessorie from './components/ProductPageAccessorie';

export const App = () => (
  <Router>
    <Header />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/tablets" element={<Tablets />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/likeditems" element={<LikedItems />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
        <Route path="/product/:id" element={<ProductPagePhone />} />
        <Route path="/product/:id" element={<ProductPageTablet />} />
        <Route path="/product/:id" element={<ProductPageAccessorie />} />
      </Routes>
    </div>
    <Footer />
  </Router>
);

export default App;
