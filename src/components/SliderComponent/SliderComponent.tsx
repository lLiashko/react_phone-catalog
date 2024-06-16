import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderComponent.module.scss';
import './slick.scss';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const slides = [
    {
      id: 1,
      imageUrl: '/img/slider/banner-accessories.png',
      alt: 'Example of accessories',
    },
    {
      id: 2,
      imageUrl: '/img/slider/banner-phones.png',
      alt: 'Example of phones',
    },
    {
      id: 3,
      imageUrl: '/img/slider/category-accessories.png',
      alt: 'Example of cases',
    },
  ];

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map(slide => (
          <div key={slide.id} className={styles.slickSlide}>
            <img src={slide.imageUrl} alt={slide.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
