import React from "react";

const Comments = () => {
  return (
    <div className="mt-8">
      <div className="text-2xl font-bold">Comments</div>
      <ul>
        <li className="mb-4 bg-slate-300 p-2 rounded">
          <div className="flex items-center mb-2">
            <div className="text-blue-500 font-bold mr-2">Jone Jones</div>
            <div className="text-slate-500">12 Dec 2021</div>
          </div>
          <p>I gonna smash your Boy!!!</p>
        </li>
      </ul>
    </div>
  );
};

export default Comments;
