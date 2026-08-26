import React from "react";
import styles from "./WhatsAppButton.module.css";

const WhatsAppButton = ({ phoneNumber = "254700000000", message = "Hello, I would like to make an inquiry." }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
      aria-label="Order on WhatsApp"
    >
      <svg
        className={styles.whatsappIcon}
        viewBox="0 0 32 32"
        fill="currentColor"
      >
        <path d="M16 2A13 13 0 0 0 4.69 21.25L3 29l7.92-1.63A13 13 0 1 0 16 2zm0 24a11 11 0 0 1-5.59-1.53l-.4-.24-4.16.86.87-4.04-.26-.42A11 11 0 1 1 16 26zm6.05-8.24c-.33-.17-1.96-.97-2.27-1.08s-.53-.17-.75.17-.86 1.08-1.05 1.3-.39.25-.72.08a9.17 9.17 0 0 1-2.7-1.67 10.12 10.12 0 0 1-1.87-2.33c-.2-.33 0-.5.15-.67s.33-.39.5-.58a2.26 2.26 0 0 0 .33-.55.6.6 0 0 0 0-.58c-.08-.17-.75-1.81-1.03-2.48s-.55-.57-.75-.58h-.64a1.23 1.23 0 0 0-.89.41 3.76 3.76 0 0 0-1.17 2.8 6.55 6.55 0 0 0 1.37 3.47c.17.23 2.37 3.62 5.75 5.07.8.35 1.43.56 1.92.71a4.62 4.62 0 0 0 2.12.13 3.47 3.47 0 0 0 2.28-1.6 2.82 2.82 0 0 0 .2-1.6c-.09-.15-.34-.24-.67-.41z" />
      </svg>
      <span>Order on WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;