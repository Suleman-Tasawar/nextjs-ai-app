import Link from "next/link";
import BlogCard from "../../components/general/BlogCard";
import { redirect } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getData(userId: string) {
  const blogData = await prisma.blogPost.findMany({
    where: {
      AutherId: userId,
    },
    orderBy: {
      CreatedAt: "desc",
    },
  });
  return blogData;
}

const DashboardRoute = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.id) {
    redirect("/api/auth/login");
  }
  const myBlogData = await getData(user.id);

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold tracking-tight">Your Blog Articles</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {myBlogData.map((data) => (
          <BlogCard data={data} key={data.Id} />
        ))}
      </div>
    </div>
  );
};

export default DashboardRoute;
