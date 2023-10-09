import Dice from "./components/Dice"

export default function App() {

  

  return (
    <main>
      <div className="container">
        <Dice value="1" />
        <Dice value="2" />
        <Dice value="3" />
        <Dice value="4" />
        <Dice value="5" />
        <Dice value="3" />
        <Dice value="2" />
        <Dice value="6" />
        <Dice value="4" />
        <Dice value="1" />
      </div>
    </main>
  )
}
