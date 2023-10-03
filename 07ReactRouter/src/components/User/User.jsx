import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return (
    <div className="text-4xl text-center">
      <h1>User page</h1>
      <h2>User:{id}</h2>
    </div>
  );
}

export default User;
