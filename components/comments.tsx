import prisma from "@/lib/db";
import { FC } from "react";

interface CommentsProps {
  postId: string;
}
const Comments: FC<CommentsProps> = async ({ postId }) => {
  const comments = await prisma.comment.findMany({
    where: { postId },
    include: { author: true },
  });

  return (
    <div className="mt-8">
      <div className="text-2xl font-bold">Comments</div>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="mb-4 bg-slate-300 p-2 rounded">
            <div className="flex items-center mb-2">
              <div className="text-blue-500 font-bold mr-2">Jone Jones</div>
              <div className="text-slate-500">12 Dec 2021</div>
            </div>
            <p>I gonna smash your Boy!!!</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
