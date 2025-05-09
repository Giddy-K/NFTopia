import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { OnboardModal } from "./components";
import { Home, CreateBattle, BattleGround, Battle, JoinBattle, GameMode, LevelUp} from "./page/";
import { GlobalContextProvider } from "./context";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GlobalContextProvider>
      <OnboardModal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-battle" element={<CreateBattle />} />
        <Route path="/join-battle" element={<JoinBattle />} />
        <Route path="/battle/:battleName" element={<Battle />} />
        <Route path="/battleground" element={<BattleGround />} />
        <Route path="/game-mode" element={<GameMode />} />
        <Route path="/level-up" element={<LevelUp />} />
      </Routes>
    </GlobalContextProvider>
  </BrowserRouter>
);
