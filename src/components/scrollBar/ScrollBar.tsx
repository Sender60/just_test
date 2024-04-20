import React, { useState, useEffect } from 'react';

const ScrollIndicator = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      console.log(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        height: '1rem',
        width: `${(scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100}%`,
        backgroundColor: 'crimson',
      }}
    />
  );
};

export default ScrollIndicator;
