import Comments from "@/components/comments";
import FormComment from "@/components/form-comments";
import prisma from "@/lib/db";
import { FC } from "react";

interface BlogDetailPageProps {
  params: {
    id: string;
  };
}

const BlogDetailPage: FC<BlogDetailPageProps> = async ({ params }) => {
  const post = await prisma.post.findFirst({
    where: { id: params.id },
    include: { author: true },
  });
  console.log(post);
  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold">{post?.title}</h1>
      <p>Written by: {post?.author?.name}</p>
      <p className="mt-4 font-sans ">{post?.content}</p>
      <Comments />
      <FormComment />
    </div>
  );
};

export default BlogDetailPage;
