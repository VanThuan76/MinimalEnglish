"use client"

import { LiNews } from '@/app/[locale]/(home)/new&blog/_sections/listnews'
import { NewsBig } from '@/app/[locale]/(home)/new&blog/_sections/newsBig'
import { Data } from '@/app/[locale]/type'
import { useGlobalState } from '@/components/hooks/GlobalStateContext.tsx'
import React from 'react'

export const NewsAndBlog: React.FC<{data: Data}> = ({data}) => {
  const {state} = useGlobalState()
  return (
    <>
        {state.value === "all" && 
        <>
          <NewsBig
            tag={data.news_blog.all[0].tag}
            description={data.news_blog.all[0].description} 
            href={data.news_blog.all[0].href} 
            image={data.news_blog.all[0].image} 
            publishInfor={data.news_blog.all[0].publishInfor} 
            title={data.news_blog.all[0].title}
          />
          <LiNews liNews={data.news_blog.all}/>
        </>}
        {state.value === "tips" && 
        <>
          <NewsBig
            tag={data.news_blog.tips[0].tag}
            description={data.news_blog.tips[0].description} 
            href={data.news_blog.tips[0].href} 
            image={data.news_blog.tips[0].image} 
            publishInfor={data.news_blog.tips[0].publishInfor} 
            title={data.news_blog.tips[0].title}
          />
          <LiNews liNews={data.news_blog.tips}/>
        </>}
        {state.value === "ielts news" && 
        <>
          <NewsBig
            tag={data.news_blog.ieltsNews[0].tag}
            description={data.news_blog.ieltsNews[0].description} 
            href={data.news_blog.ieltsNews[0].href} 
            image={data.news_blog.ieltsNews[0].image} 
            publishInfor={data.news_blog.ieltsNews[0].publishInfor} 
            title={data.news_blog.ieltsNews[0].title}
          />
          <LiNews liNews={data.news_blog.ieltsNews}/>
        </>}
        {state.value === "minimal english news" && 
        <>
          <NewsBig
            tag={data.news_blog.minimalNews[0].tag}
            description={data.news_blog.minimalNews[0].description} 
            href={data.news_blog.minimalNews[0].href} 
            image={data.news_blog.minimalNews[0].image} 
            publishInfor={data.news_blog.minimalNews[0].publishInfor} 
            title={data.news_blog.minimalNews[0].title}
          />
          <LiNews liNews={data.news_blog.minimalNews}/>
        </>}
        {state.value === "FAQ" && 
        <>
          <NewsBig
            tag={data.news_blog.faq[0].tag}
            description={data.news_blog.faq[0].description} 
            href={data.news_blog.faq[0].href} 
            image={data.news_blog.faq[0].image} 
            publishInfor={data.news_blog.faq[0].publishInfor} 
            title={data.news_blog.faq[0].title}
          />
          <LiNews liNews={data.news_blog.faq}/>
        </>}
    </>
  )
}
