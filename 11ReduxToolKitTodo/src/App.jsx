import "./App.css";
import AddTodo from "./components/AddTodo";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="text-3xl text-gray-800 font-bold my-4">Add Your Todos</h1>
      <AddTodo />
      <Todo />
    </div>
  );
}

export default App;
