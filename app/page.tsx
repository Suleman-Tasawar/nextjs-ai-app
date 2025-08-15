import BlogCard from "./components/BlogCard";
import { prisma } from "@/lib/prisma";

async function getData() {
  const blogData = await prisma.blogPost.findMany({
    select: {
      Title: true,
      AutherImage:true,
      AutherName: true,
      Content: true,
      Id: true,
      ImageUrl:true
    },
  });
  return blogData;
}
export default async function Home() {
  const data = await getData()
  return (
    <div className="font-sans min-h-screen p-8 sm:p-20 bg-muted">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">My Blog Home Page</h1>
          <p className="text-muted-foreground text-lg">Welcome to the latest posts</p>
        </header>

        <section className="space-y-6 max-w-2xl w-full">
          {data.map((post) => (
            <BlogCard data={post} key={post.Id} />
          ))}
        </section>
      </div>
    </div>
  );
}
