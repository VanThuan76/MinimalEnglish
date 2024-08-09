import { ListNews } from "@/app/[locale]/(home)/new&blog/_sections/listNews"
import { NewsBig } from "@/app/[locale]/(home)/new&blog/_sections/newsBig"
import { getData } from "@/app/[locale]/(home)/page"
import { Data, IeltsNews } from "@/app/[locale]/type"

export default async function NewAndBlog(){
  const data: Data = await getData()
  const listdata: IeltsNews[] = data.news_blog.ieltsNews.splice(1)

  return (
    <>
      <NewsBig 
        tag={data.news_blog.ieltsNews[0].tag}
        image={data.news_blog.ieltsNews[0].image}
        publishInfor={data.news_blog.ieltsNews[0].publishInfor}
        title={data.news_blog.ieltsNews[0].title}
        description={data.news_blog.ieltsNews[0].description}
      />
      <ListNews ieltsNews={listdata} />
    </>
  )
}import { Writing } from "app/[locale]/(home)/library/_sections/writing";