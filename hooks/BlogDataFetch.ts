'use server'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/lib/prisma";
// import { EpragneFormSchema, SharesFormSchema, mouvementFormSchema } from "@/lib/zodSchemaHandler";
import { getServerSession } from 'next-auth/next'
import * as z from "zod"

// import { revalidatePath } from 'next/cache'

export const user = async () => {
  const session = await getServerSession(authOptions);
  let user = await prisma.user.findMany({
    where: {
      email: session?.user?.email ?? "",
    },
    },
  );
  return user[0]
}

export const getBlogCategories = async () => {
    try {
        //   const session = await getServerSession(authOptions);
        let categories = await prisma.blogCategorie.findMany({
            // where: {
            //   email: session?.user?.email ?? "",
            // },
            },
        );
        return JSON.stringify({categories, status : 500})
    } catch (error) {
        console.log(error)
        return JSON.stringify({message : 'something went wrong', status : 500})
    }
}

export const getBlogPosts = async () => {
    try {
        //   const session = await getServerSession(authOptions);
        let posts = await prisma.blogPosts.findMany({
            // where: {
            //   email: session?.user?.email ?? "",
            // },
            },
        );
        return JSON.stringify({posts, status : 500})
    } catch (error) {
        console.log(error)
        return JSON.stringify({message : 'something went wrong', status : 500})
    }
}

export const getUniqueBlogPosts = async (id : number) => {
  try {
    const posts = await prisma.blogPosts.findMany({
      where: {
        id: Number(id),
      },
    });
    if (posts.length === 0) {
      return null; // Return null when no data is found
    }
    console.log(posts)
    return JSON.stringify({ posts, status: 500 });
  } catch (error) {
    console.log(error);
    return JSON.stringify({ message: 'something went wrong', status: 500 });
  }
};

export const PostBlogPosts = async (val) => {
  const {slug, title, description, catSlug, userEmail} = val

    try {
        //   const session = await getServerSession(authOptions);
        await prisma.blogPosts.create({
          data: {
            slug :slug,
            title: title,
            description: description,
            catSlug  :   catSlug,
            userEmail :  userEmail,
          }
        }

        );
        return JSON.stringify({status : 201})
    } catch (error) {
        console.log(error)
        return JSON.stringify({message : 'something went wrong', status : 500})
    }
}

