import React from 'react';
import styles from './ProductDetails.module.css';

const ProductDetails = ({ product, onBack }) => {
  if (!product) return null;

  // Format currency to Kenyan Shillings cleanly
  const formatKES = (amount) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0
    }).format(amount);
  };

  return (
    <div className={styles.detailsContainer}>
      {/* Back navigation button */}
      <button className={styles.backBtn} onClick={onBack}>
        ← Back to Products
      </button>

      <div className={styles.mainLayout}>
        {/* Left Side: Product Image Showcase */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <img src={product.image} alt={product.name} />
          </div>
        </div>

        {/* Right Side: Information & Action Block */}
        <div className={styles.infoSection}>
          <span className={styles.badgeCategory}>{product.category}</span>
          <h1 className={styles.productName}>{product.name}</h1>
          
          <div className={styles.priceContainer}>
            <span className={styles.currentPrice}>{formatKES(product.price)}</span>
            {product.oldPrice && (
              <span className={styles.oldPrice}>{formatKES(product.oldPrice)}</span>
            )}
          </div>

          <div className={styles.divider}></div>

          <div className={styles.specsContainer}>
            <h3>Key Specifications</h3>
            <p>{product.specs}</p>
          </div>

          <div className={styles.divider}></div>

          {/* Action Row */}
          <div className={styles.actionRow}>
            <button className={styles.addToCartBtn}>
              Add to Cart
            </button>
            <button className={styles.buyNowBtn}>
              Buy Now (WhatsApp)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;