import { Link } from 'react-router-dom';
import styles from './Category.module.scss';

export default function Category({ title, quantity, image, link }: any) {
  return (
    <div>
      <Link to={link}>
        <img className={styles.img} src={image} alt={title} />
      </Link>
      <Link className={styles.title} to={link}>
        <p>{title}</p>
      </Link>
      <p className={styles.quantity}>{quantity} models</p>
    </div>
  );
}
