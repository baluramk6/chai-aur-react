import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 5;

  let [counter, setCounter] = useState(7);

  const addValue = () => {
    // console.log(counter);
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;
