import "./App.css";
import Card from "./components/Card";

function App() {
  const user1 = "Baluram";
  const user2 = "Kumawat";

  return (
    <>
      <h1 className="bg-green-400 p-2 mb-2">Tailwind Test</h1>
      <Card user1={user1} />
      <Card user1={user2} />
    </>
  );
}

export default App;
