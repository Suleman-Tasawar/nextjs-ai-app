import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      Id: id,
    },
  });
  if (!data) {
    return notFound();
  }
  return data;
}

type Params = Promise<{ id: string }>;

export default async function IdPage({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className="max-w-3xl mx-auto py-10 px-4 space-y-6">
      {/* Back Button */}
      <div>
        <Link className={buttonVariants({ variant: "secondary" })} href="/dashboard">
          ← Back To Dashboard
        </Link>
      </div>

      {/* Blog Card */}
      <Card>
        <CardHeader className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{data.Title}</h1>
          <div className="text-sm text-muted-foreground">
            Posted on{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            }).format(data.CreatedAt)}
          </div>
        </CardHeader>

        {/* Blog Image */}
        {data.ImageUrl && (
          <div className="w-full h-64 relative rounded-md overflow-hidden">
            <Image
              src={data.ImageUrl}
              alt="Blog Cover Image"
              fill
              className="object-contain"
              priority
            />
          </div>
        )}

        <CardContent className="prose dark:prose-invert max-w-none mt-6">
          <p>{data.Content}</p>
        </CardContent>

        {/* Footer: Author Info */}
        <CardFooter className="flex items-center gap-4 border-t pt-4 mt-4">
          <Image
            src={data.AutherImage}
            alt={data.AutherName}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-medium">{data.AutherName}</p>
            <p className="text-xs text-muted-foreground">Author</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
