import { useState } from "react";

interface DiceProps {
    value: number;
    held: boolean;
    id: number;
}

const Dice = ({ dice, onHold }: { dice: DiceProps; onHold: (id: number) => void }) => {
    return (
        <div 
            className={`dice ${dice.held ? "held" : ""}`}
            onClick={() => onHold(dice.id)}
        >
            {dice.value}
        </div>
    );
};

const DiceGame = () => {
    const [totalScore, setTotalScore] = useState<number>(0);
    const [turnScore, setTurnScore] = useState<number>(0);
    const [dice, setDice] = useState<DiceProps[]>(initializeDice());
    const [isRolling, setIsRolling] = useState(false);
    const [canContinue, setCanContinue] = useState(false);

    function initializeDice(): DiceProps[] {
        return Array.from({ length: 6 }, (_, index) => ({
            value: Math.floor(Math.random() * 6) + 1,
            held: false,
            id: index,
        }));
    }

    const handleRollDice = () => {
        if (!canContinue) {
            alert("Legalább egy kockát ki kell választanod!");
            return;
        }

        setIsRolling(true);
        const updatedDice = dice.map((dice) =>
            dice.held ? dice : { ...dice, value: Math.floor(Math.random() * 6) + 1 }
        );

        const heldScore = calculateTurnScore(dice.filter((dice) => dice.held));
        setTurnScore((prevScore) => prevScore + heldScore);

        const newRollScore = calculateTurnScore(updatedDice.filter((dice) => !dice.held));
        if (newRollScore === 0 && heldScore === 0) {
            alert(`No score! You rolled: ${updatedDice.map((dice) => dice.value).join(", ")}`);
            setTurnScore(0);
            resetGame();
        } else {
            setDice(updatedDice);
            setCanContinue(false);
        }

        setIsRolling(false);
    };

    const toggleDiceHold = (id: number) => {
        const updatedDice = dice.map((dice) =>
            dice.id === id ? { ...dice, held: !dice.held } : dice
        );
        setDice(updatedDice);

        const heldScore = calculateTurnScore(updatedDice.filter((dice) => dice.held));
        setCanContinue(heldScore > 0);
    };

    const finalizeTurn = () => {
        if (turnScore >= 500) {
            setTotalScore((prev) => prev + turnScore);
            setTurnScore(0);
            resetGame();
        } else {
            alert("Legalább 500 pontot kell szerezned a kör lezárásához.");
        }
    };

    const resetGame = () => {
        setDice(initializeDice());
        setCanContinue(false);
    };

    const calculateTurnScore = (selectedDice: DiceProps[]): number => {
        const counts = Array(7).fill(0);
        let score = 0;

        selectedDice.forEach((dice) => {
            counts[dice.value]++;
        });

        score += counts[1] * 100;
        score += counts[5] * 50;

        for (let i = 1; i <= 6; i++) {
            if (counts[i] >= 3) {
                score += i === 1 ? 300 : i * 100;
                counts[i] -= 3;
            }
        }

        for (let i = 1; i <= 6; i++) {
            if (counts[i] === 4) score += 1000;
            else if (counts[i] === 5) score += 2000;
            else if (counts[i] === 6) score += 3000;
        }

        const uniqueValues = new Set(selectedDice.map((dice) => dice.value));
        if (uniqueValues.size === 6) score += 1500;
        else if (counts.filter((count) => count === 2).length === 3) score += 1500;
        else if (counts.filter((count) => count === 3).length === 2) score += 2500;
        else if (counts.filter((count) => count === 4).length === 1 && counts.filter((count) => count === 2).length === 1)
            score += 1500;

        return score;
    };

    return (
        <div id="diceContainer">
            <h2>Turn Score: {turnScore}</h2>
            <div id="dices">
                {dice.map((dice) => (
                    <Dice key={dice.id} dice={dice} onHold={toggleDiceHold} />
                ))}
            </div>
            <div className="game-buttons">
                <button onClick={handleRollDice} disabled={isRolling} class="diceControllerBtn">Roll Dice</button>
                <button onClick={finalizeTurn} class="diceControllerBtn">End Turn</button>
            </div>
        </div>
    );
};

export default DiceGame;
