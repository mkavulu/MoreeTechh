import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';
import './Checkout.css';

export const Checkout = ({ cartItems = [], totalAmount = 0, onOrderComplete }) => {
  const toastContext = useToast();
  const addToast = toastContext?.addToast || ((msg) => console.log(msg));

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    address: '',
    paymentMethod: 'mpesa',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName || !formData.phone || !formData.address) {
      addToast('Please fill in all required shipping fields.', 'error');
      return;
    }

    addToast('Opening WhatsApp to complete order...', 'info');

    // Format payment option text cleanly
    const paymentLabel = formData.paymentMethod === 'mpesa' ? 'M-Pesa Mobile Payment' : 'Cash / Pay on Delivery';

    // Construct formatted order message for WhatsApp
    const message = `*NEW ORDER SUBMITTED*\n\n` +
      `*Customer Details:*\n` +
      `Name: ${formData.fullName}\n` +
      `Phone: ${formData.phone}\n` +
      `Address: ${formData.address}\n` +
      `Payment Method: ${paymentLabel}\n\n` +
      `*Order Items:*\n` +
      cartItems.map(item => `- ${item.name || item.title} (x${item.quantity}): KSh ${((item.price || 0) * (item.quantity || 1)).toLocaleString()}`).join('\n') +
      `\n\n*Total Payable:* KSh ${totalAmount.toLocaleString()}`;

    const phoneNumber = "254724137327";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp tab with details populated
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    if (typeof onOrderComplete === 'function') {
      onOrderComplete(formData);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Complete Your Purchase</h2>

      <div className="checkout-grid">
        <form onSubmit={handleSubmit} className="form-section">
          <h3>Shipping & Billing Details</h3>

          <label className="checkout-label">Full Name *</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="John Doe"
            className="checkout-input"
          />

          <label className="checkout-label">Phone Number (M-Pesa) *</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="0712 345 678"
            className="checkout-input"
          />

          <label className="checkout-label">Delivery Address *</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Building, Street, Town"
            rows="3"
            className="checkout-input"
          ></textarea>

          <h3>Payment Option</h3>
          <div className="payment-options">
            <label className="radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="mpesa"
                checked={formData.paymentMethod === 'mpesa'}
                onChange={handleChange}
              />
              M-Pesa Mobile Payment
            </label>

            <label className="radio-label">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={formData.paymentMethod === 'cod'}
                onChange={handleChange}
              />
              Cash / Pay on Delivery
            </label>
          </div>

          <button type="submit" className="submit-btn">
            Confirm Order via WhatsApp (KSh {totalAmount.toLocaleString()})
          </button>
        </form>

        <div className="summary-section">
          <h3>Order Overview</h3>
          <div className="item-list">
            {cartItems.map((item, index) => (
              <div key={item.id || index} className="summary-item">
                <span>
                  {item.name || item.title} (x{item.quantity})
                </span>
                <strong>
                  KSh {((item.price || 0) * (item.quantity || 1)).toLocaleString()}
                </strong>
              </div>
            ))}
          </div>
          <hr />
          <div className="total-row">
            <span>Total Payable:</span>
            <span>KSh {totalAmount.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;