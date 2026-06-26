import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext'; // <-- 1. Import the hook
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart(); // <-- 2. Destructure the add function

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={product.image || 'https://via.placeholder.com/200'} alt={product.name} />
      </div>
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.specs}>{product.specs}</p>
        <div className={styles.priceRow}>
          <span className={styles.price}>KSh {product.price.toLocaleString()}</span>
          {product.oldPrice && <span className={styles.oldPrice}>KSh {product.oldPrice.toLocaleString()}</span>}
        </div>
        {/* 3. Fire addToCart when clicked */}
        <button className={styles.addToCartBtn} onClick={() => addToCart(product)}>
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;