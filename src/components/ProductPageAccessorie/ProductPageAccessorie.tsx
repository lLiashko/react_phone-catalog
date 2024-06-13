import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Accessorie {
  id: string;
  name: string;
  priceDiscount: number;
  images: string[];
  screen: string;
  capacity: string;
  ram: string;
  namespaceId: string;
}

export default function ProductPageAccessorie() {
  const { id } = useParams<{ id: string }>();
  const [accessorie, setAccessorie] = useState<Accessorie | null>(null);

  useEffect(() => {
    fetch(`/api/accessories.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        const selectedAccessorie = data.find((a: Accessorie) => a.id === id);

        setAccessorie(selectedAccessorie);
      });
  }, [id]);

  if (!accessorie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{accessorie.name}</h1>
    </div>
  );
}
