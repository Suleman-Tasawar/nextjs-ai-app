import Link from "next/link";
import Image from "next/image";
import { Card,CardHeader,CardTitle,CardContent,CardFooter } from "@/components/ui/card";

interface IAppProps {
  data: {
    Id: string;
    Title: string;
    Content: string;
    ImageUrl: string;
    AutherId?: string;
    AutherName: string;
    AutherImage: string;
    CreatedAt?: Date;
    UpdatedAt?: Date;
  };
}

const BlogCard = ({data}:IAppProps) => {
  return (
    <Card key={data.Id} className="transition-shadow hover:shadow-lg">
      <Link href={`/post/${data.Id}`} className="block h-full">
        <div className="relative w-full h-48 rounded-t-md overflow-hidden">
          <Image
            src={data.ImageUrl}
            alt="Blog Image"
            fill
            className="object-cover"
          />
        </div>

        <div className="p-4 flex flex-col justify-between h-[calc(100%-192px)]">
          <CardHeader className="p-0 mb-2">
            <CardTitle className="text-lg font-semibold">
              {data.Title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0 text-sm text-muted-foreground line-clamp-3">
            {data.Content}
          </CardContent>
        </div>

        <CardFooter className="flex items-center justify-between pb-2">
          <div className="flex items-center gap-2">
            <Image
              width={32}
              height={32}
              className="rounded-full object-cover"
              src={data.AutherImage}
              alt="Author Image"
            />
            <span className="text-sm font-medium text-gray-700">
              {data.AutherName}
            </span>
          </div>
          <time className="text-xs text-gray-500">
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "short",
              day: "numeric",
            }).format(data.CreatedAt)}
          </time>
        </CardFooter>
      </Link>
    </Card>
  );
};

export default BlogCard;
