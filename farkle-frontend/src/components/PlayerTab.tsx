import { useContext, useState } from "react";

type PlayerData = {
    totalPoints: number,
    round: number,
    selected: number
}

const PlayerTab = (props: PlayerData) => {
    return (
        <div id="player" className="user">
            <h3>total/<span className="totalPoints">5000</span></h3>
            <h1 className="userPoints">{props.totalPoints}</h1>

            <hr />

            <p>round</p>
            <p className="roundNumber">{props.round}</p>

            <hr />
            
            <p>selected</p>
            <p className="selectedNumber">{props.selected}</p>
        </div>
    );
};

export default PlayerTab;