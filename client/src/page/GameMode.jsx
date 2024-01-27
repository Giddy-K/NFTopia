import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { useGlobalContext } from "../context";
import { CustomButton, Alert } from "../components";
import { levelUp, online } from "../assets";

const GameMode = () => {
  const {
    contract,
    walletAddress,
    setShowAlert,
    showAlert,
    setErrorMessage,
    gameData,
  } = useGlobalContext();
  const navigate = useNavigate();

  //Online multiplayer Mode
  const handleOnlineMultiplayer = () => {
    // Navigate to the Online Multiplayer screen
    navigate("/create-battle");
  };

  //Single player mode
  const handleLevelUpQuests = () => {
    // Navigate to the Level Up Quests screen
    navigate("/level-up");
  };

  return (
    <div className={`${styles.scrollContainer} h-full w-full`}>
    <div className={`${styles.flexCol} h-full w-full`}>
      {showAlert?.status && (
        <Alert type={showAlert.type} message={showAlert.message} />
      )}
      <div className="absolute top-0 left-0 p-4">
        <p className={`flex ${styles.gameModeHT} head-text`}>Test</p>
        <p className={`flex ${styles.gameModeHT} head-text`}>{walletAddress}</p>
      </div>
      
      <div className={`${styles.contentBox} ${styles.flexRow} h-full w-full`}>
        {/* Online Multiplayer */}
        <div className={`${styles.flexCol} items-center mt-20`}>
          <div className={`${styles.imageContainer} mt-10`}>
            <img src={online} alt="Online Game" className={styles.image} />
          </div>
          <CustomButton
            title="Online Multiplayer"
            handleClick={handleOnlineMultiplayer}
            restStyles="mt-4"
          />
        </div>
        {/* Level Up Quests */}
        <div className={`${styles.flexCol} items-center mt-20`}>
          <div className={`${styles.imageContainer} mt-10`}>
            <img src={levelUp} alt="Level Up" className={styles.levelUpImage} />
          </div>
          <CustomButton
            title="Level Up Quests"
            handleClick={handleLevelUpQuests}
            restStyles="mt-4"
          />
        </div>
        
        
      </div>
      {/* Footer Text */}
      <p className={`${styles.footerBox} ${styles.footerText} w-full`}>
          Copyright © 2024 All rights reserved{" "}
          <a
            href="https://x.com/Giddy_KK?t=_oopVrOZu77tBxxwxy0-Tw&s=09"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkBlue}
          >
            @codewithgiddy🪐
          </a>
        </p>
      </div>
      {/* Hero Image */}
      {/* <div className="flex flex-1">
        <img
          src={heroImg}
          alt="hero-img"
          className="w-full xl:h-full object-cover "
        />
      </div> */}
    </div>
  );
};

export default GameMode;
