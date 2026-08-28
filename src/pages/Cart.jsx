import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from '../context/ToastContext';
import styles from './Cart.module.css';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();

  // Toast-enabled item removal
  const handleRemoveItem = (id, name) => {
    removeFromCart(id);
    addToast(`${name || 'Item'} removed from cart`, 'info');
  };

  // Toast-enabled cart clearing
  const handleClearCart = () => {
    clearCart();
    addToast('Cart cleared', 'info');
  };

  // WhatsApp Checkout Integration
  const handleWhatsAppCheckout = () => {
    const phoneNumber = "254724137327";
    
    let message = "Hello! I would like to place an order for the following items:\n\n";
    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.title || item.name}* (Qty: ${item.quantity}) - KSh ${(item.price * item.quantity).toLocaleString()}\n`;
    });
    
    message += `\n*Total Amount:* KSh ${getCartTotal().toLocaleString()}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
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
                onClick={() => handleRemoveItem(item.id, item.title || item.name)}
                title="Remove item"
              >
                &times;
              </button>
            </div>
          ))}

          <button className={styles.clearBtn} onClick={handleClearCart}>
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

          {/* Standard Web Checkout Route Navigation */}
          <button className={styles.checkoutBtn} onClick={() => navigate('/checkout')}>
            Proceed to Checkout
          </button>

          {/* Direct WhatsApp Order Option */}
          <button className={styles.whatsappBtn} onClick={handleWhatsAppCheckout}>
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