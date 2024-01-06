import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CustomButton, CustomInput, PageHOC } from "../components";
import { useGlobalContext } from "../context";

const Home = () => {
  const { contract, walletAddress, setShowAlert, setErrorMessage, gameData } = useGlobalContext();
  const [playerName, setPlayerName] = useState("");
  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const playerExists = await contract.isPlayer(walletAddress);

      if (!playerExists) {
        await contract.registerPlayer(playerName, playerName);

        setShowAlert({
          status: true,
          type: "info",
          message: `${playerName} is being summoned!`,
        });

        setTimeout(() => navigate('/game-mode'), 8000);
      }
    } catch (error) {
      setErrorMessage(error.message)
    }
  };

  useEffect(() => {
    const checkForPlayerToken = async () => {
      const playerExists = await contract.isPlayer(walletAddress);
      const playerTokenExists = await contract.isPlayerToken(walletAddress);
      console.log({ playerExists, playerTokenExists });
      if (playerExists && playerTokenExists) {
        navigate("/game-mode");
      }
    };
    if (contract) checkForPlayerToken();
  }, [contract]);

  useEffect(() => {
    if(gameData.activeBattle){
      navigate(`/battle/${gameData.activeBattle.name}`)
    }
  }, [gameData]);

  return (
    <div className="flex flex-col">
      <CustomInput
        label="Name"
        placeHolder="Enter your player name"
        value={playerName}
        handleValueChange={setPlayerName}
      />
      <CustomButton
        title="Join Game"
        handleClick={handleClick}
        restStyles="mt-6"
      />
    </div>
  );
};

export default PageHOC(
  Home,
  <>
    Welcome to NFTopia Realm of Cards <br /> a Web3 NFT Card Game.
  </>,
  <>Connect your wallet to begin your journey.</>
);
