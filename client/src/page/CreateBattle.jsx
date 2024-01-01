import React from "react";
import { PageHOC } from "../components";

const CreateBattle = () => {
  return (
    <div>
      <h1 className="text-white text-xl">Hello from Create Battle</h1>
    </div>
  );
};

export default PageHOC(
    CreateBattle,
  <>Create or Join <br/> a new Battle.</>,
  <>Create your own battle and wait for other players to join.</>
);
