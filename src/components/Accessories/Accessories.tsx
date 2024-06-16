import { useEffect, useState, MouseEvent } from 'react';
import Card from '../BrandNewModels/Card/Card';
import styles from './Accessories.module.scss';
import { Link } from 'react-router-dom';

interface Accessory {
  id: string;
  name: string;
  priceDiscount: number;
  images: string[];
  screen: string;
  capacity: string;
  ram: string;
  namespaceId: string;
}

export default function Accessories() {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://lliashko.github.io/react_phone-catalog/api/accessories.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        setAccessories(data);
      })
      .catch(() => {
        setFetchError('Error fetching accessories data');
      });
  }, []);

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  const handleAddToCart = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    // add to cart logic
  };

  const handleLike = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    // like logic
  };

  return (
    <div>
      <h1>Accessories</h1>
      <div className={styles.grid}>
        {accessories.map(accessory => (
          <Link
            to={`/product/${accessory.id}`}
            key={accessory.id}
            className={styles.link}
          >
            <Card
              key={accessory.id}
              img={accessory.images[0]}
              title={accessory.name}
              price={`$${accessory.priceDiscount}`}
              screen={accessory.screen}
              capacity={accessory.capacity}
              ram={accessory.ram}
              onAddToCart={handleAddToCart}
              onLike={handleLike}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
