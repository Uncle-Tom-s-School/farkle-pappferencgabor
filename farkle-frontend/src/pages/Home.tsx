import { createContext, useEffect, useState } from "react";
import DiceGame from "../components/Dice";
import PlayerTab from "../components/PlayerTab";

const Home = () => {
    return (
        <div className="content">
            <DiceGame />
            <div className="playerTabsContainer">
                <PlayerTab totalPoints={5000} player="P1" />
                <PlayerTab totalPoints={5000} player="P2" />
            </div>
        </div>
    );
};

export default Home;