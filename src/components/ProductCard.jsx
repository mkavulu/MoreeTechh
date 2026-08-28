import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import { useCart } from '../context/CartContext';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation(); // Prevents triggering parent card click (e.g., opening product details)
    addToCart(product);
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img 
          src={product.image || 'https://via.placeholder.com/200'} 
          alt={product.name} 
          className={styles.image} 
        />
      </div>
      
      <div className={styles.info}>
        <span className={styles.category}>{product.category}</span>
        <h3 className={styles.title}>{product.name}</h3>
        {product.specs && <p className={styles.specs}>{product.specs}</p>}
        
        <div className={styles.priceRow}>
          <span className={styles.price}>
            KSh {product.price?.toLocaleString()}
          </span>
          {product.oldPrice && (
            <span className={styles.oldPrice}>
              KSh {product.oldPrice?.toLocaleString()}
            </span>
          )}
        </div>

        <button 
          className={styles.addToCartBtn} 
          onClick={handleAddToCart}
        >
          <FiShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;