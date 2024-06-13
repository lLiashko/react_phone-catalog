import BrandNewModels from '../BrandNewModels';
import HotPrices from '../HotPrices/HotPrices';
import ShopByCategory from '../ShopByCategory';
import SliderComponent from '../SliderComponent';

const Home = () => (
  <>
    <h1>Welcome to Nice Gadgets Store!👌</h1>
    <SliderComponent />
    <BrandNewModels />
    <ShopByCategory />
    <HotPrices />
  </>
);

export default Home;
