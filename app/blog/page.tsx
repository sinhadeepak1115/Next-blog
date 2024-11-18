import prisma from "@/lib/db";
import Link from "next/link";

const BlogPage = async () => {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      author: true,
    },
  });
  console.log(posts);
  return (
    <>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-4 ">Blogs</h1>
      </div>
      <div className="grid sm:grid-cols-2 md:col-span-3 gap-4">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`blog/${post.id}`}
            className="bg-sky-100 rounded shadow-xl"
          >
            <div>
              <h2 className="text-xl font-bold  p-2 hover:underline">
                {post.title}
              </h2>
              <p className="text-black text p-2">{post.content}</p>
              <p className="p-2">Written by: {post.author.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogPage;
