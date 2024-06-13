import { useState, MouseEvent } from 'react';
import './Card.scss';

const Card = ({
  img,
  title,
  price,
  screen,
  capacity,
  ram,
  onAddToCart,
  onLike,
}: {
  img: string;
  title: string;
  price: string;
  screen: string;
  capacity: string;
  ram: string;
  onAddToCart: (event: MouseEvent<HTMLButtonElement>) => void;
  onLike: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  const [like, setLike] = useState(true);

  function toggleLike(event: MouseEvent<HTMLButtonElement>) {
    event.stopPropagation();
    onLike(event);
    setLike(() => !like);
  }

  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-image" />
      <h2 className="title">{title}</h2>
      <p className="price">{price}</p>
      <div className="specs">
        <p>
          Screen: <tr>{screen}</tr>
        </p>
        <p>
          Capacity: <tr>{capacity}</tr>
        </p>
        <p>
          RAM: <tr>{ram}</tr>
        </p>
      </div>

      <div className="button-container">
        <button className="add-to-cart" onClick={onAddToCart}>
          Add to cart
        </button>
        <button className="like-button" onClick={toggleLike}>
          {like ? (
            <img src="./icons/liked-items.png" alt="like-button" />
          ) : (
            <img src="./icons/liked-items-filled.png" alt="like-button" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Card;
