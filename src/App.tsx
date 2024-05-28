import './App.scss';

import BrandNewModels from './components/BrandNewModels';
import Footer from './components/Footer/Footer';
import Header from './components/Header';
import HotPrices from './components/HotPrices/HotPrices';
import ShopByCategory from './components/ShopByCategory';
import SliderComponent from './components/SliderComponent';

export const App = () => (
  <div>
    <Header />
    <h1>Welcome to Nice Gadgets Store!</h1>
    <SliderComponent />
    <BrandNewModels />
    <ShopByCategory />
    <HotPrices />
    <Footer />
  </div>
);
