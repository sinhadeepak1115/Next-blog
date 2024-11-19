"use client";

import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, FC, useState } from "react";

interface FormCommentProps {
  postId: string;
}
const FormComments: FC<FormCommentProps> = ({ postId }) => {
  const [comment, setComment] = useState<string>("");
  const router = useRouter();
  const { data } = useSession();

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async () => {
    if (comment.trim() !== "") {
      try {
        const newComment = await axios.post("/api/comments", {
          postId,
          text: comment,
        });
        if (newComment.status === 200) {
          router.refresh();
        }
      } catch (error) {
        console.error(error);
      }
    }
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
          disabled={!data?.user?.email}
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
