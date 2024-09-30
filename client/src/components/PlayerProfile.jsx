import React from "react";
import { player01 } from "../assets";
import styles from "../styles";

const PlayerProfile = ({ onClose }) => {
  return (
    <div className={`fixed top-0 right-0 h-full w-1/3 bg-gray-800 p-8 ${styles.glowBorder.base}`}>
      <button
        onClick={onClose}
        className="text-white bg-red-600 px-4 py-2 rounded-full hover:bg-red-800 absolute top-4 right-4"
      >
        Close
      </button>
      <div className="flex flex-col items-center">
        {/* Player Image */}
        <img
          src={player01}
          alt="Player Profile"
          className="w-24 h-24 object-contain rounded-full mb-4"
        />
        
        {/* Player Information */}
        <div className="text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Player Name</h2>
          <p className="text-lg">Level: 10</p>
          <p className="text-lg">Wins: 25</p>
          <p className="text-lg">Losses: 5</p>
        </div>

        {/* Additional Stats or Actions */}
        <div className="mt-4 text-white">
          <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-700">
            View Achievements
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerProfile;
