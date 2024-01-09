import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { useGlobalContext } from "../context";
import { CustomButton, Alert, CustomInput } from "../components";
import { heroImg } from "../assets";

const GameMode = () => {
    const { contract, walletAddress, setShowAlert, showAlert, setErrorMessage, gameData } = useGlobalContext();
    const navigate = useNavigate();


  //Online multiplayer Mode
  const handleOnlineMultiplayer = () => {
    // Navigate to the Online Multiplayer screen
    navigate("/create-battle");
  };

  //Single player mode
  const handleLevelUpQuests = () => {
    // Navigate to the Level Up Quests screen
    navigate("/level-up-quests");
  };

  return (
    <div className={styles.hocContainer}>
    {showAlert?.status && (
      <Alert type={showAlert.type} message={showAlert.message} />
    )}
    <div className="absolute top-0 left-0 p-4">
        <p className="text-white">Test</p>
        <p className="text-white">{walletAddress}</p>
      </div>
    <div className={styles.hocContentBox}>
    <div className="flex flex-col items-center mt-10">
      <div className={styles.image-container}>
        <img src="" alt="Online Game" className={styles.image} />
      </div>
      <CustomButton title="Online Multiplayer" handleClick={handleOnlineMultiplayer} />
    </div>
    <div className="flex flex-col items-center mt-6">
      <div className="image-container">
        <img src="" alt="Level Up" className={styles.image} />
      </div>
      <CustomButton title="Level Up Quests" handleClick={handleLevelUpQuests} restStyles="mt-4" />
    </div> 
      <p className={styles.footerText}>
    Copyright © 2024 All rights reserved{' '}
    <a href="https://x.com/Giddy_KK?t=_oopVrOZu77tBxxwxy0-Tw&s=09" target="_blank" rel="noopener noreferrer" className={styles.linkBlue} >
      @codewithgiddy🪐
    </a>
  </p>
    </div>
    <div className="flex flex-1">
      <img
        src={heroImg}
        alt="hero-img"
        className="w-full xl:h-full object-cover "
      />
    </div>
  </div>
  );
};

export default GameMode;
