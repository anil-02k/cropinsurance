import React, { useState, useEffect } from 'react';
import './Slogan.css'; // Ensure your CSS is imported

const SloganRotator = () => {
  const slogans = [
    "Creating Insurance Access For Rural India",
    "Bridging the Gap Between Insurance & Rural India",
    "Rural India's Gateway to Insurance - कृषि बीमा का आसरा",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slogans.length);
    }, 4000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [slogans.length]);

  return (
    <div className="slogan-container">
      <span id="slogan">{slogans[index]}</span>
    </div>
  );
};

export default SloganRotator;
