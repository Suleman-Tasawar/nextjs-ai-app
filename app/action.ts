"use server";
import { prisma } from "@/lib/prisma";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function handleSubmission(formData: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    return redirect("/api/auth/register");
  }
  
  const title = formData.get("title");
  const content = formData.get("content");
  const url = formData.get("url");

  await prisma.blogPost.create({
    data: {
      Title: title as string,
      Content: content as string,
      ImageUrl: url as string,
      AutherId: user.id,
      AutherImage: user.picture as string,
      AutherName: user.given_name as string,
    },
  });
  
  return redirect("/dashboard");
}
