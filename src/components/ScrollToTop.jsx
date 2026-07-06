import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Accesses the current URL path location
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly resets the viewport window to coordinate (0,0) on path change
    window.scrollTo(0, 0);
  }, [pathname]); // Fires automatically whenever the page path changes

  return null; // This component handles logic only; it doesn't render HTML
};

export default ScrollToTop;