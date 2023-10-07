import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import { FaEdit } from "react-icons/fa";
import { RiChatDeleteFill } from "react-icons/ri";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul className="max-w-screen-sm w-full">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-slate-700 p-2 rounded-sm list-none w-full my-4"
        >
          <span className=" text-white text-lg">{todo.todo}</span>

          <div className="flex gap-x-10">
            <button
              className="text-2xl font-bold text-red-600 cursor-pointer"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              <RiChatDeleteFill />
            </button>
            <button className="text-2xl font-bold text-green-500 cursor-pointer"
            onClick={()=>dispatch}
            >
              <FaEdit />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default Todo;
