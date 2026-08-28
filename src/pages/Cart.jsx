import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  // WhatsApp Checkout Integration
  const handleWhatsAppCheckout = () => {
    const phoneNumber = "254724137327"; // Replace with your business number
    
    let message = "Hello! I would like to place an order for the following items:\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.title || item.name}* (Qty: ${item.quantity}) - KSh ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    message += `\n*Total Amount:* KSh ${getCartTotal().toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h2>Your Cart is Empty</h2>
        <p>Looks like you haven't added any products to your cart yet.</p>
        <Link to="/" className={styles.shopBtn}>
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.cartContainer}>
      <h1 className={styles.title}>Shopping Cart</h1>

      <div className={styles.cartLayout}>
        {/* Cart Items List */}
        <div className={styles.itemList}>
          {cartItems.map((item) => (
            <div key={item.id} className={styles.cartItem}>
              <img src={item.image} alt={item.title || item.name} className={styles.itemImage} />
              
              <div className={styles.itemDetails}>
                <h3 className={styles.itemName}>{item.title || item.name}</h3>
                <p className={styles.itemPrice}>KSh {item.price?.toLocaleString()}</p>
              </div>

              {/* Quantity Selector */}
              <div className={styles.quantityControls}>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                  +
                </button>
              </div>

              <div className={styles.itemSubtotal}>
                KSh {(item.price * item.quantity).toLocaleString()}
              </div>

              <button 
                className={styles.removeBtn} 
                onClick={() => removeFromCart(item.id)}
                title="Remove item"
              >
                &times;
              </button>
            </div>
          ))}

          <button className={styles.clearBtn} onClick={clearCart}>
            Clear Cart
          </button>
        </div>

        {/* Order Summary Sidebar */}
        <div className={styles.summaryCard}>
          <h2>Order Summary</h2>
          
          <div className={styles.summaryRow}>
            <span>Items Subtotal</span>
            <span>KSh {getCartTotal().toLocaleString()}</span>
          </div>
          
          <div className={styles.summaryRow}>
            <span>Estimated Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          
          <hr />
          
          <div className={`${styles.summaryRow} ${styles.totalRow}`}>
            <span>Total</span>
            <span>KSh {getCartTotal().toLocaleString()}</span>
          </div>

          <button className={styles.checkoutBtn} onClick={handleWhatsAppCheckout}>
            Order via WhatsApp
          </button>
          
          <button className={styles.continueBtn} onClick={() => navigate('/')}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;