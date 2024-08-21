"use client"

import { LiNews } from '@/app/[locale]/(home)/news&blog/_sections/listnews' 
import { NewsBig } from '@/app/[locale]/(home)/news&blog/_sections/newsBig' 
import { useGlobalState } from '@/components/hooks/GlobalStateContext.tsx'
import { useGetAllCategory } from '@/schema/services/allcategory'
import { useGetNews } from '@/schema/services/AllNews' 

export const NewsAndBlog = () => {
  const {data: category} = useGetAllCategory()
  const {data: news} = useGetNews()
  
  return (
    <>
      {
        news && 
          <>
            <NewsBig
            tag={category && category[news[0].news_category_id - 1].description}
            description={news[0].description} 
            href={`/${news[0].slug}`}
            image={news[0].image} 
            created_at={news[0].created_at} 
            read_time={news[0].read_time}
            title={news[0].title}
            />
            <LiNews data={news}/>
          </>
      }
    </>
  )
}
