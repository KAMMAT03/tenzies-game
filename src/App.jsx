import Dice from "./components/Dice"
import React from "react";
import { nanoid } from "nanoid";

export default function App() {
  const [dice, setDice] = React.useState(allNewDices());

  const [tenzies, setTenzies] = React.useState(false);

  React.useEffect(() => {
    const val = dice[0].value;
    for (let obj of dice){
      if (!obj.isHeld || obj.value !== val) return;
    }
    setTenzies(true);

    console.log('You won!');
  }, [dice])

  function allNewDices() {
    return Array(10).fill(null).map(() => ({
                value: Math.ceil(Math.random() * 6),
                isHeld: false,
                id: nanoid()
              }));
  }

  function toggleHeld(id){
    setDice(prev => prev.map(obj => obj.id === id ? {...obj, isHeld: !obj.isHeld} : obj));
  }

  function rollDice() {
    setDice(prev => {
      return prev.map(obj => {
        return obj.isHeld ? obj : {...obj, value: Math.ceil(Math.random() * 6)}
      })
    });
  }

  const diceElements = dice.map(obj => 
    (<Dice value={obj.value}  key={obj.id} isHeld={obj.isHeld} toggleHeld={() => toggleHeld(obj.id)} />));

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="container">
        {diceElements}
      </div>
      <button onClick={rollDice}>Roll</button>
    </main>
  )
}
