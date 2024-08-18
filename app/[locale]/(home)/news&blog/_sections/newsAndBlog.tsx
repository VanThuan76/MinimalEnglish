"use client"

import { LiNews } from '@/app/[locale]/(home)/news&blog/_sections/listnews' 
import { NewsBig } from '@/app/[locale]/(home)/news&blog/_sections/newsBig' 
import { useGlobalState } from '@/components/hooks/GlobalStateContext.tsx'
import { useGetNews } from '@/schema/services/news&blog/news&blog'

export const NewsAndBlog = () => {
  const {data: news, isLoading} = useGetNews()
  const {state} = useGlobalState()
  if(isLoading) return <section className="py-[60px] px-[16px] h-[400px] md:px-[80px] bg-white" />

  const tips = news.filter((item: any) => item.news_category_id === 1)
  const ieltsNews = news.filter((item: any) => item.news_category_id === 2)
  const MEnews = news.filter((item: any) => item.news_category_id === 3)
  const faq = news.filter((item: any) => item.news_category_id === 4)
  const tag = ["tips", "ielts News", "ME News", "faq"]
  
  return (
    <>
      <NewsBig
        tag={tag[news[0].news_category_id - 1]}
        description={news[0].description} 
        href={`/${news[0].slug}`}
        image={news[0].image} 
        created_at={news[0].created_at} 
        read_time={news[0].read_time}
        title={news[0].title}
      />
      {state.order === 0 && <LiNews liNews={news}/>}
      {state.order === 1 && <LiNews liNews={tips}/>}
      {state.order === 2 && <LiNews liNews={ieltsNews}/>}
      {state.order === 3 && <LiNews liNews={MEnews}/>}
      {state.order === 4 && <LiNews liNews={faq}/>}
    </>
  )
}
