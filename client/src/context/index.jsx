import React, { createContext, useContext, useEffect, useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { useNavigate } from "react-router-dom";

// import { GetParams } from '../utils/onboard.js';
import { ABI, ADDRESS } from "../contract/index";
import { createEventListeners } from "./createEventListeners";

const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState(() => {
    // Initialize wallet address from localStorage if available
    const storedAddress = localStorage.getItem('walletAddress');
    return storedAddress || '';
  });
  const [contract, setContract] = useState("");
  const [provider, setProvider] = useState("");
  const [showAlert, setShowAlert] = useState({
    status: false,
    type: "info",
    message: "",
  });
  const [battleName, setBattleName] = useState("");
  const [gameData, setGameData] = useState({
    players: [],
    pendingBattles: [],
    activeBattle: null,
  });
  const [updateGameData, setUpdateGameData] = useState(0);
  const [battleGround, setBattleGround] = useState('bg-astral');
  const navigate = useNavigate();

  //* Set the wallet address to the state and LocalStorage
  const updateCurrentWalletAddress = async () => {
    const accounts = await window?.ethereum?.request({
      method: "eth_requestAccounts",
    });

    if (accounts && accounts[0]) {
      setWalletAddress(accounts[0]);
      localStorage.setItem('walletAddress', accounts[0]); // Save wallet address to localStorage
    }
  };

  useEffect(() => {
    //updateCurrentWalletAddress();
    // window?.ethereum?.on("accountsChanged", updateCurrentWalletAddress);
  }, []);

  //* Set the smart contract and provider to the state
  useEffect(() => {
    const setSmartContractAndProvider = async () => {
      const web3Modal = new Web3Modal();
      const connection = await web3Modal.connect();
      const newProvider = new ethers.providers.Web3Provider(connection);
      const signer = newProvider.getSigner();
      const newContract = new ethers.Contract(ADDRESS, ABI, signer);

      setProvider(newProvider);
      setContract(newContract);

      updateCurrentWalletAddress();
      window?.ethereum?.on("accountsChanged", updateCurrentWalletAddress);
    };

    setSmartContractAndProvider();
  }, []);

  useEffect(() => {
    if (contract) {
      createEventListeners({
        navigate,
        contract,
        provider,
        walletAddress,
        setShowAlert,
        setUpdateGameData
      });
    }
  }, [contract]);

  //* Handle alerts
  useEffect(() => {
    if (showAlert?.status) {
      const timer = setTimeout(() => {
        setShowAlert({ status: false, type: "info", message: "" });
      }, [5000]);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  //* Set the game data to the state
  useEffect(() => {
    const fetchGameData = async () => {
        const fetchedBattles = await contract.getAllBattles();
        const pendingBattles = fetchedBattles.filter(
          (battle) => battle.battleStatus === 0
        );
        let activeBattle = null;
        

        fetchedBattles.forEach((battle) => {
          if (
            battle.players.find(
              (player) => player.toLowerCase() === walletAddress.toLowerCase()
            )
          ) {
            if (battle.winner.startsWith("0x00")) {
              activeBattle = battle;
            }
          }
        });
        //console.log(fetchedBattles);
        setGameData({ pendingBattles: pendingBattles.slice(1), activeBattle });
      
    };

    if (contract) fetchGameData();
  }, [contract, updateGameData]);

  return (
    <GlobalContext.Provider
      value={{
        contract,
        walletAddress,
        showAlert,
        setShowAlert,
        battleName,
        setBattleName,
        gameData,
        setGameData,
        battleGround,
        setBattleGround,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
