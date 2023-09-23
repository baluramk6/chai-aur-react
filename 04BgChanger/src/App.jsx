import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("violet");

  return (
    <div
      className="w-full h-screen flex justify-center items-center"
      style={{ background: color }}
    >
      <h1 className="text-2xl font-bold text-white">{color}</h1>
      <div className="w-full h-20 bg-white fixed bottom-0 left-0 flex justify-center gap-2 items-center">
        <button
          className="py-2 px-10 rounded-xl shadow-lg text-white bg-red-500"
          onClick={() => setColor("red")}
        >
          Red
        </button>
        <button
          className="py-2 px-10 rounded-xl shadow-lg text-white bg-green-500"
          onClick={() => setColor("green")}
        >
          Green
        </button>
        <button
          className="py-2 px-10 rounded-xl shadow-lg text-white bg-blue-500"
          onClick={() => setColor("blue")}
        >
          Blue
        </button>
        <button
          className="py-2 px-10 rounded-xl shadow-lg text-white bg-sky-500"
          onClick={() => setColor("skyBlue")}
        >
          Sky
        </button>
        <button
          className="py-2 px-10 rounded-xl shadow-lg text-white bg-pink-500"
          onClick={() => setColor("pink")}
        >
          Pink
        </button>
        <button
          className="py-2 px-10 rounded-xl shadow-lg text-white bg-yellow-500"
          onClick={() => setColor("yellow")}
        >
          Yellow
        </button>
        <button
          className="py-2 px-10 rounded-xl shadow-lg text-white bg-black"
          onClick={() => setColor("black")}
        >
          Black
        </button>
      </div>
    </div>
  );
}

export default App;
