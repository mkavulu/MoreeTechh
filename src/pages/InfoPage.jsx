import React, { useEffect } from 'react';
import styles from './InfoPage.module.css';

const InfoPage = ({ type, onBack }) => {
  // 💡 Ensure our layout viewport scrolls perfectly to the top when an info sheet opens
  useEffect(() => {
    window.scrollTo(0, 0);
    if (document.documentElement) document.documentElement.scrollTop = 0;
  }, [type]);

  // Mock text sets for Kenyan retail tech compliance
  const getContent = () => {
    switch (type) {
      case 'terms':
        return {
          title: 'Terms & Conditions',
          content: (
            <>
              <h3>1. Agreement to Terms</h3>
              <p>By accessing our workspace platform, you agree to be strictly bound by these terms, operating guidelines, and all applicable local regulations within Kenya.</p>
              <h3>2. Purchase & Delivery</h3>
              <p>All tech item orders placed on the storefront are subject to hardware stock confirmation. Standard fulfillment deliveries within Nairobi take 1-2 business days.</p>
            </>
          )
        };
      case 'privacy':
        return {
          title: 'Privacy Protection Policy',
          content: (
            <>
              <h3>1. Data Collection</h3>
              <p>We securely collect transactional billing profiles and contact details solely to manage checkout processing and dispatch operations safely.</p>
              <h3>2. Payment Safety</h3>
              <p>We do not store complete raw banking codes or payment credentials on local databases. All data configurations are handled via encrypted gateway systems.</p>
            </>
          )
        };
      case 'warranty':
        return {
          title: 'Return & Warranty Policy',
          content: (
            <>
              <h3>1. Return Window</h3>
              <p>Genuine tech products can be returned within 7 calendar days from the date of purchase if they remain sealed inside original packaging.</p>
              <h3>2. Hardware Warranty Coverage</h3>
              <p>Brand new laptops and All-in-One desktops carry a comprehensive 1-year hardware warranty servicing manufacturer performance defects.</p>
            </>
          )
        };
      default:
        return { title: 'Policy Sheet', content: <p>Select a valid option link.</p> };
    }
  };

  const pageData = getContent();

  return (
    <div className={styles.infoContainer}>
      <button onClick={onBack} className={styles.backButton}>
        ← Back to Storefront
      </button>
      <h1 className={styles.pageHeader}>{pageData.title}</h1>
      <div className={styles.contentBody}>
        {pageData.content}
      </div>
    </div>
  );
};

export default InfoPage;