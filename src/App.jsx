import Dice from "./components/Dice"
import React from "react";

export default function App() {
  const [dice, setDice] = React.useState(allNewDices());

  function allNewDices() {
    return Array(10).fill(null).map(() => Math.ceil(Math.random() * 6));
  }

  const diceElements = dice.map((val, index) => <Dice value={val} key={index} />);

  return (
    <main>
      <div className="container">
        {diceElements}
      </div>
      <button>Roll</button>
    </main>
  )
}
