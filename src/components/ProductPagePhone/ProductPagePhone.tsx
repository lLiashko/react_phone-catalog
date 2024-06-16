import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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

export default function ProductPagePhone() {
  const { id } = useParams<{ id: string }>();
  const [phone, setPhone] = useState<Phone | null>(null);

  useEffect(() => {
    fetch(`https://lliashko.github.io/react_phone-catalog/api/phones.json`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        return response.json();
      })
      .then(data => {
        const selectedPhone = data.find((p: Phone) => p.id === id);

        setPhone(selectedPhone);
      });
  }, [id]);

  if (!phone) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{phone.name}</h1>
    </div>
  );
}
