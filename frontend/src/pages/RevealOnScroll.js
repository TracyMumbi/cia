import React, { useEffect, useState } from 'react';

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('revealElement');
      const position = element.getBoundingClientRect();

      if (position.top < window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check visibility on component mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="revealElement" className={`element ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default RevealOnScroll;
