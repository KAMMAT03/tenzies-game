import Dice from "./components/Dice"
import React from "react";

export default function App() {
  const [dice, setDice] = React.useState(allNewDices());

  function allNewDices() {
    return Array(10).fill(null).map(() => Math.ceil(Math.random() * 6));
  }

  function rollDice() {
    setDice(allNewDices());
  }

  const diceElements = dice.map((val, index) => <Dice value={val} key={index} />);

  return (
    <main>
      <div className="container">
        {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}
