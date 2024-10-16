import { useContext, useState } from "react";

type OpponentData = {
    totalPoints: number,
    round: number,
    selected: number
}

const OpponentsTab = (props: OpponentData) => {
    return (
        <div id="opponent" className="user">
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

export default OpponentsTab;