import React from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password });
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-4 border rounded-md py-4 px-12">
      <h2>Login</h2>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter email"
        className="w-full p-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter password"
        className="w-full p-2"
      />
      <button
        className="bg-blue-500 py-2 px-4 rounded-md text-white"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
