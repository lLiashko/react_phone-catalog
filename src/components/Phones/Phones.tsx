import { useEffect, useState, MouseEvent } from 'react';
import Card from '../BrandNewModels/Card/Card';
import styles from './Phones.module.scss';
import { Link } from 'react-router-dom';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

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
  const [sortOption, setSortOption] = useState<string>('newest');
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm] = useState<string>('');

  useEffect(() => {
    fetch('https://lliashko.github.io/react_phone-catalog/api/phones.json')
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

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(event.target.value);
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    setItemsPerPage(parseInt(event.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  const filteredPhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const sortedPhones = [...filteredPhones].sort((a, b) => {
    if (sortOption === 'newest') {
      return b.priceDiscount - a.priceDiscount;
    } else if (sortOption === 'alphabetically') {
      return a.name.localeCompare(b.name);
    } else if (sortOption === 'cheapest') {
      return a.priceDiscount - b.priceDiscount;
    }

    return 0;
  });

  const paginatedPhones = sortedPhones.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const totalPages = Math.ceil(filteredPhones.length / itemsPerPage);

  if (fetchError) {
    return <div>{fetchError}</div>;
  }

  return (
    <div>
      <h1>Mobile Phones</h1>
      <p className={styles.quantity}>{phones.length} models</p>
      <div>
        <div className={styles.sort}>
          <label className={styles.labelName}>
            Sort by
            <div>
              <select
                value={sortOption}
                onChange={handleSortChange}
                className={styles.select}
              >
                <option className={styles.option} value="alphabetically">
                  Alphabetically
                </option>
                <option className={styles.option} value="newest">
                  Price (high to low)
                </option>
                <option className={styles.option} value="cheapest">
                  Price (low to high)
                </option>
              </select>
            </div>
          </label>
          <label className={styles.labelName}>
            Items on page{' '}
            <div>
              <select
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className={styles.select}
              >
                <option className={styles.option} value={4}>
                  4
                </option>
                <option className={styles.option} value={8}>
                  8
                </option>
                <option className={styles.option} value={16}>
                  16
                </option>
                <option className={styles.option} value={phones.length}>
                  All
                </option>
              </select>
            </div>
          </label>
        </div>
      </div>
      <div className={styles.grid}>
        {paginatedPhones.map(phone => (
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
      <Stack
        spacing={2}
        sx={{
          '& .MuiPagination-ul': {
            justifyContent: 'center',
            padding: '20px 0',
            zIndex: -1,
          },
          '& .MuiPaginationItem-root': {
            color: '#905BFF',
          },
        }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </div>
  );
}
