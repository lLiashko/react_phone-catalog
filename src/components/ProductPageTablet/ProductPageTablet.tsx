import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

export default function ProductPageTablet() {
  const { id } = useParams<{ id: string }>();
  const [tablet, setTablet] = useState<Tablet | null>(null);

  useEffect(() => {
    fetch('/api/tablets.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        const selectedTablet = data.find((t: Tablet) => t.id === id);

        setTablet(selectedTablet);
      });
  }, [id]);

  if (!tablet) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{tablet.name}</h1>
    </div>
  );
}
