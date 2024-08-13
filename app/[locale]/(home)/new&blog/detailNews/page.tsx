import { News } from "@/app/[locale]/(home)/new&blog/detailNews/_section/news" 
import { OtherNews } from "@/app/[locale]/(home)/new&blog/detailNews/_section/otherNews"
import { getData } from "@/app/[locale]/(home)/page"
import { Data } from "@/app/[locale]/type"

export default async function Page(){
  const data: Data = await getData()
  return (
    <>
        <News detail={data.news_blog.detail}/>
        <OtherNews otherNews={data.news_blog.tips}/>
    </>
)}