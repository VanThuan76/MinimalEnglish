"use client"

import { News } from "@/app/[locale]/(home)/news&blog/[slug]/_section/news" 
import { OtherNews } from "@/app/[locale]/(home)/news&blog/[slug]/_section/otherNews" 
import { useGetNewsBySlug } from "@/schema/services/new_by_slug"

export default function DetailNews({params}: { params: { slug: string } }){
  const {data: detail, isLoading} = useGetNewsBySlug({slug: params.slug})
  if(isLoading) return <section className="py-[60px] px-[16px] h-[400px] md:px-[80px] bg-white"></section>
  
  return (
    <>  
    {
      detail &&
        <>
          <News content={detail.content} description={detail.description} image={detail.image} title={detail.title}/>
          <OtherNews id={detail.news_category_id}/>
        </>
    }
    </>
)}