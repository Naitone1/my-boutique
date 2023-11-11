// import { allDocs } from "@/.contentlayer/generated"
import CardBlog from "@/app/blog/CardBlog"
import ButtonLink from "@/app/blog/buttonLink"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getBlogCategories, getBlogPosts } from "@/hooks/BlogDataFetch"

const page = async () => {
  let categories = JSON.parse(await getBlogCategories()).categories
  let posts = JSON.parse(await getBlogPosts()).posts

  return (
    <>
    <div className="mx-20 mt-10">
      <h1 className="text-4xl font-semibold">Journal de développement</h1>
      <h2 className="text-xl font-semibold mt-5">Découvrez ici les détails du développement de cet webapp.</h2>
      <div className="flex gap-2">
      {categories.map(e => 
      <Button key={e.id}>{e.title}</Button>
      )}
      </div>
      <div className="flex flex-wrap gap-4 mt-10">
        {posts.map(e => {
          return (
            <CardBlog 
              key={e.id}
                title={e.title} 
                date={"01/12/2020"}
                description={e.description}
                cat={e.cat}
                img={e.img}
                link={'blog/'+e.id}
              />
          )
        })}
        <Card className='h-96 w-80'>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle >Créez un article</CardTitle>
            <CardDescription>...</CardDescription>
          </CardHeader>
          <CardContent className='h-5/6 mt-5'>
            <ButtonLink />
            <div className='z-10'>
              <p className='text-muted-foreground mt-2'>Cliquez sur le bouton pour créer un article.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
    </>
  )
}

export default page