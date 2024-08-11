import { Faq } from "@/app/[locale]/(home)/new&blog/_sections/faq"
import { IeltsNews } from "@/app/[locale]/(home)/new&blog/_sections/ieltsNews"
import { MinimalNews } from "@/app/[locale]/(home)/new&blog/_sections/minimalNews"
import { NewsBig } from "@/app/[locale]/(home)/new&blog/_sections/newsBig"
import { Tips } from "@/app/[locale]/(home)/new&blog/_sections/tips"
import { getData } from "@/app/[locale]/(home)/page"
import { Data } from "@/app/[locale]/type"

export default async function NewAndBlog(){
  const data: Data = await getData()
 
  return (
    <>
      <NewsBig 
        tag={data.news_blog.ieltsNews[0].tag}
        image={data.news_blog.ieltsNews[0].image}
        publishInfor={data.news_blog.ieltsNews[0].publishInfor}
        title={data.news_blog.ieltsNews[0].title}
        description={data.news_blog.ieltsNews[0].description}
        href={data.news_blog.ieltsNews[0].href}
      />
      <Tips tips={data.news_blog.tips} />
      <IeltsNews ieltsNews={data.news_blog.ieltsNews} />
      <MinimalNews minimalNews={data.news_blog.minimalNews} />
      <Faq faq={data.news_blog.faq} />
    </>
  )
}
