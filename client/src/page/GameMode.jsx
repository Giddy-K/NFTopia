import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

import styles from "../styles";
import { useGlobalContext } from "../context";
import { CustomButton, GameInfo, Alert } from "../components";
import { levelUp, online, liveBackground } from "../assets";

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
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    const fetchPlayerName = async () => {
      try {
        // Assuming the getPlayer method returns the player's name
        const player = await contract.getPlayer(walletAddress);

        // Extracting the player's name from the contract response
        const playerName = player.playerName;

        // Set the playerName in the component's state
        setPlayerName(playerName);
      } catch (error) {
        setErrorMessage(error.message);
      }
    };

    if (contract && walletAddress) {
      fetchPlayerName();
    }
  }, [contract, walletAddress, setErrorMessage]);
       
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
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden',
    }}>
      <video
        autoPlay
        muted
        loop
        style={{
          objectFit: 'cover',
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: '-1',
        }}
      >
        <source src={liveBackground} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className={`${styles.scrollContainer} h-full w-full`}>
    <div className={`${styles.flexCol} h-full w-full`}>
      {showAlert?.status && (
        <Alert type={showAlert.type} message={showAlert.message} />
      )}
      <div className={`absolute top-10 left-0 p-4 ${styles.glowBorder.base} ${styles.glowBorder.colors.default} ${styles.glowBorder.active}`}>
        <p className={`flex ${styles.gameModeHT}`}>{playerName && `Player Name: ${playerName}`}</p>
        
        <p className={`flex ${styles.gameModeHT}`}>{walletAddress}</p>
      </div>
      
      <div className={`${styles.contentBox} ${styles.flexRow} h-full w-full`}>
        {/* Online Multiplayer */}
        <div className={`${styles.flexCol} items-center flex justify-center`}>
          <div className={`${styles.imageContainer} mt-10`}>
            <img src="" alt="Online Game" className={styles.image} />
          </div>
          <CustomButton
            title="Online Multiplayer"
            handleClick={handleOnlineMultiplayer}
            restStyles="mt-4"
          />
        </div>
        {/* Level Up Quests */}
        <div className={`${styles.flexCol} items-center flex justify-center`}>
          <div className={`${styles.imageContainer} mt-10`}>
            <img src="" alt="Level Up" className={styles.levelUpImage} />
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
        <GameInfo />
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
    </div>
  );
};

export default GameMode;
