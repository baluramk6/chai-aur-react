import React from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div className="text-lg p-4 text-red-500">Please login first</div>;

  return (
    <div>
      <h1>Welcome {user.userName}</h1>
      <h2 className="text-green-500">Login Succesfully</h2>
    </div>
  );
}

export default Profile;
