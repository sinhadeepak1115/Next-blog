"use client";
import React, { ChangeEvent, useState } from "react";

const FormComments = () => {
  const [comment, setComment] = useState<string>("");
  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const handleSubmitComment = () => {
    console.log(comment);
  };
  return (
    <div>
      <div className="mt-4">
        <label className="font-bold block text-gray-700 text-sm mb-2">
          Add Comment
        </label>
        <input
          className="rounded-md w-full py-2 px-3 border border-gray-300 focus:outline-none focus:border-blue-300 focus:ring"
          name="Comment"
          value={comment}
          onChange={handleCommentChange}
        />
        <button
          onClick={handleSubmitComment}
          className="bg-blue-500 px-4 py-2 text-white rounded-md mt-3 font-bold"
        >
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default FormComments;
