import { useState, MouseEvent } from 'react';
import './CardWithDiscount.scss';

const Card = ({
  img,
  title,
  price,
  priceDiscount,
  screen,
  capacity,
  ram,
  onAddToCart,
  onLike,
}: {
  img: string;
  title: string;
  price: string;
  priceDiscount: string;
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
      <p className="price">
        <span className="discount-price">{priceDiscount}</span>
        <span className="regular-price">{price}</span>
      </p>
      <div className="specs">
        <p>
          Screen: <span>{screen}</span>
        </p>
        <p>
          Capacity: <span>{capacity}</span>
        </p>
        <p>
          RAM: <span>{ram}</span>
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
