import React, { useEffect, useState } from 'react';
import styles from '../styles';

const Protips = () => {
  const protipsList = [
    "Protip: Stay focused and strategize!",
    "Protip: Upgrade your cards for better chances.",
    "Protip: Check out our blog for advanced tactics.",
    "Protip: While you're waiting, choose your preferred battleground",
    // Add more protips as needed
  ];

  const [currentProtipIndex, setCurrentProtipIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the protip index every 10 seconds
      setCurrentProtipIndex((prevIndex) => (prevIndex + 1) % protipsList.length);
    }, 10000);

    // Clear the interval on component unmount to prevent memory leaks
    return () => clearInterval(interval);
  }, [protipsList.length]);

  return (
    <p className={styles.gameLoadText}>
      {protipsList[currentProtipIndex]}
    </p>
  );
};

export default Protips;