import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "../styles";
import { useGlobalContext } from "../context";
import { CustomButton, Alert, CustomInput } from "../components";
import { heroImg } from "../assets";

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
    navigate("/level-up-quests");
  };

  return (
    <div className={styles.scrollContainer}>
    <div className={styles.hocContainer}>
      {showAlert?.status && (
        <Alert type={showAlert.type} message={showAlert.message} />
      )}
      <div className="absolute top-0 left-0 p-4">
        <p className={styles.normalText}>Test</p>
        <p className={styles.normalText}>{walletAddress}</p>
      </div>
      
      <div className={`${styles.hocContentBox} ${styles.flexCol}`}>
        {/* Online Multiplayer */}
        <div className={`${styles.flexCol} items-center mt-10`}>
          <div className={styles.imageContainer}>
            <img src={heroImg} alt="Online Game" className={styles.image} />
          </div>
          <CustomButton
            title="Online Multiplayer"
            handleClick={handleOnlineMultiplayer}
          />
        </div>
        {/* Level Up Quests */}
        <div className={`${styles.flexCol} items-center mt-6`}>
          <div className={styles.imageContainer}>
            <img src={heroImg} alt="Level Up" className={styles.image} />
          </div>
          <CustomButton
            title="Level Up Quests"
            handleClick={handleLevelUpQuests}
            restStyles="mt-4"
          />
        </div>
        {/* Footer Text */}
        <p className={styles.footerText}>
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
