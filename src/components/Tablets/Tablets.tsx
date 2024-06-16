import { useEffect, useState, MouseEvent } from 'react';
import Card from '../BrandNewModels/Card/Card';
import styles from '../Accessories/Accessories.module.scss';
import { Link } from 'react-router-dom';

interface Tablet {
  id: string;
  name: string;
  priceDiscount: number;
  images: string[];
  screen: string;
  capacity: string;
  ram: string;
  namespaceId: string;
}

export default function Tablets() {
  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://lliashko.github.io/react_phone-catalog/api/tablets.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        setTablets(data);
      })
      .catch(() => {
        setFetchError('Error fetching tablets data');
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
      <h1>Tablets</h1>
      <div className={styles.grid}>
        {tablets.map(tablet => (
          <Link
            to={`/product/${tablet.id}`}
            key={tablet.id}
            className={styles.link}
          >
            <Card
              key={tablet.id}
              img={tablet.images[0]}
              title={tablet.name}
              price={`$${tablet.priceDiscount}`}
              screen={tablet.screen}
              capacity={tablet.capacity}
              ram={tablet.ram}
              onAddToCart={handleAddToCart}
              onLike={handleLike}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
