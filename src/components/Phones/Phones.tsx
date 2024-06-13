import { useEffect, useState, MouseEvent } from 'react';
import Card from '../BrandNewModels/Card/Card';
import styles from '../Accessories/Accessories.module.scss';
import { Link } from 'react-router-dom';

interface Phone {
  id: string;
  name: string;
  priceDiscount: number;
  images: string[];
  screen: string;
  capacity: string;
  ram: string;
  namespaceId: string;
}

export default function Phones() {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/phones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        setPhones(data);
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
    // add to cart logic
  };

  const handleLike = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    event.preventDefault();
    // like logic
  };

  return (
    <div>
      <h1>Phones</h1>
      <div className={styles.grid}>
        {phones.map(phone => (
          <Link
            to={`/product/${phone.id}`}
            key={phone.id}
            className={styles.link}
          >
            <Card
              key={phone.id}
              img={phone.images[0]}
              title={phone.name}
              price={`$${phone.priceDiscount}`}
              screen={phone.screen.slice(0, 9)}
              capacity={phone.capacity}
              ram={phone.ram}
              onAddToCart={handleAddToCart}
              onLike={handleLike}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
