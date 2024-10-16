import { useState } from "react";

const Dice = ({ value }: { value: number }) => {
    return (
        <div className="dice">
            <div>
                {value}
            </div>
        </div>
    );
};

const DiceGame = () => {
    const [diceValues, setDiceValues] = useState<number[]>(Array(6).fill(" "));

    const rollAllDice = () => {
        const newValues = Array.from({ length: 6 }, () => Math.floor(Math.random() * 6) + 1);
        setDiceValues(newValues);
    };

    return (
        <div id="diceContainer">
            <div id="dices">
                {diceValues.map((value, index) => (
                    <Dice key={index} value={value} />
                ))}
            </div>

            <div id="buttons">
                <button onClick={rollAllDice} id="diceRollBtn">Roll All Dice</button>
                <button id="diceRollBtn">Next Round</button>

            </div>
        </div>
    );
};

// Exportáljuk a DiceGame komponenst
export default DiceGame;