import React from "react";

function Card(props) {
  return (
    <div className="w-[200px] h-[300px] bg-slate-500 rounded-xl">
      <h1>{props.user1}</h1>
    </div>
  );
}

export default Card;
