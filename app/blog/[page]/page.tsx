import { prisma } from "@/lib/prisma";
import ReactMarkdown from 'react-markdown'

  export const page  = async ({ params }) => {
    const post = await prisma.blogPosts.findMany({
      where: {
        id: Number(params?.page),
      },
    });
    let posts = post[0].slug

    return (
      <div className="w-full">
        <ReactMarkdown className="prose-lg dark:prose-invert" >
          {posts} 
        </ReactMarkdown>
      </div>
    );
  };

export default page;