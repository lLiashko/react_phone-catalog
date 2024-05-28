import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './SliderComponent.module.scss';

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
      imageUrl: '/img/banner-accessories.png',
      alt: 'Example of accessories',
    },
    {
      id: 2,
      imageUrl: '/img/banner-phones.png',
      alt: 'Example of phones',
    },
    {
      id: 3,
      imageUrl: '/img/banner-tablets.png',
      alt: 'Example of tablets',
    },
  ];

  return (
    <Slider {...settings}>
      {slides.map(slide => (
        <div key={slide.id}>
          <img src={slide.imageUrl} alt={slide.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
