import { createContext, useEffect, useState } from "react";
import DiceGame from "../components/Dice";
import OpponentsTab from "../components/OpponentsTab";
import PlayerTab from "../components/PlayerTab";

const Home = () => {
    let opponentData = {
        totalPoints: 2700,
        round: 0,
        selected: 0
    };

    let playerData = {
        totalPoints: 2700,
        round: 0,
        selected: 0
    };

    return (
        <div className="content">
            <DiceGame />
            <OpponentsTab {...opponentData} />
            <PlayerTab {...playerData} />
        </div>
    );
};

export default Home;