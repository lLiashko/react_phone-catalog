import { useEffect, useState } from 'react';
import Category from './Category';
import styles from './ShopByCategory.module.scss';

export default function ShopByCategory() {
  const [phoneCount, setPhoneCount] = useState(0);
  const [tabletCount, setTabletCount] = useState(0);
  const [accessoryCount, setAccessoryCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const phonesResponse = await fetch('./api/phones.json');
      const phonesData = await phonesResponse.json();

      setPhoneCount(phonesData.length);

      const tabletsResponse = await fetch('./api/tablets.json');
      const tabletsData = await tabletsResponse.json();

      setTabletCount(tabletsData.length);

      const accessoriesResponse = await fetch('./api/accessories.json');
      const accessoriesData = await accessoriesResponse.json();

      setAccessoryCount(accessoriesData.length);
    }

    fetchData();
  }, []);

  return (
    <>
      <h2 className={styles.caption}>Shop By Category</h2>
      <div className={styles.categories}>
        <Category
          title="Mobile phones"
          quantity={phoneCount}
          image="img/shop-by-categories/category-phones.png"
          link="/phones"
        />
        <Category
          title="Tablets"
          quantity={tabletCount}
          image="img/shop-by-categories/category-tablets.png"
          link="/tablets"
        />
        <Category
          title="Accessories"
          quantity={accessoryCount}
          image="img/shop-by-categories/category-accessories.png"
          link="/accessories"
        />
      </div>
    </>
  );
}
