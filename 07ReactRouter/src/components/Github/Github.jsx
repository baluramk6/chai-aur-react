import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const user = useLoaderData();
  //   const [user, setUser] = useState([]);

  //   useEffect(() => {
  //     fetch("http://api.github.com/users/baluramk6")
  //       .then((res) => res.json())
  //       .then((res) => setUser(res));
  //   }, []);
  console.log(user);
  return (
    <div className="lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto flex justify-center py-6">
      <div className="">
        <img className="rounded-md w-1/2" src={user.avatar_url} alt="" />
      </div>
      <div className="">
        <span className="text-lg bg-slate-500 text-white py-1 px-2 rounded-md">
          Github Followers:{user?.followers}
        </span>
        <h1 className="text-lg font-bold">Name: {user.name}</h1>
      </div>
    </div>
  );
}

export default Github;

export const githubUserInfo = async () => {
  const res = await fetch("http://api.github.com/users/baluramk6");
  const data = await res.json();

  return data;
};
