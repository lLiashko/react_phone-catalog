import { useEffect, useState, MouseEvent } from 'react';
import Slider from 'react-slick';
import CardWithDiscount from './CardWithDiscount';
import styles from './HotPrices.module.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

interface Phone {
  id: string;
  name: string;
  priceRegular: number;
  priceDiscount: number;
  images: string[];
  screen: string;
  capacity: string;
  ram: string;
  namespaceId: string;
}

export default function HotPrices() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://lliashko.github.io/react_phone-catalog/api/phones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        const filteredData = data.filter(
          (phone: Phone) =>
            phone.namespaceId !== 'apple-iphone-14' &&
            phone.namespaceId !== 'apple-iphone-14-pro',
        );

        setPhones(filteredData);
      })
      .catch(() => {
        setFetchError('Error fetching phones data');
      });
  }, []);

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    //add to cart logic here
  };

  const handleLike = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    // like logic
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h2 className={styles.caption}>Hot Prices</h2>
      <Slider {...settings} className={styles.slider}>
        {phones.map(phone => (
          <Link
            to={`/product/${phone.id}`}
            key={phone.id}
            className={styles.link}
          >
            <CardWithDiscount
              key={phone.id}
              img={phone.images[0]}
              title={phone.name}
              price={`$${phone.priceRegular}`}
              priceDiscount={`$${phone.priceDiscount}`}
              screen={phone.screen}
              capacity={phone.capacity}
              ram={phone.ram}
              onAddToCart={handleAddToCart}
              onLike={handleLike}
            />
          </Link>
        ))}
      </Slider>
    </>
  );
}
