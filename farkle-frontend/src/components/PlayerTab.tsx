import { useContext, useState } from "react";

export type TabProps = {
    player: string
    totalPoints: number
}

const PlayerTab = (props: PlayerData) => {
    const [points, setPoints] = useState<number>(0)
    const [pointsRound, setPointsRound] = useState<number>(0)
    const [pointsSelected, setPointsSelected] = useState<number>(0)

    return (
        <div className="user">
            <h3>total/<span className="totalPoints">{props.totalPoints}</span></h3>
            <h1 className="userPoints">{points}</h1>

            <hr />

            <p>round</p>
            <p className="roundNumber">{pointsRound}</p>

            <hr />
            
            <p>selected</p>
            <p className="selectedNumber">{pointsSelected}</p>
        </div>
    );
};

export default PlayerTab;