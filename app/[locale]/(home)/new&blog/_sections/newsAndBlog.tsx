"use client"

import { Faq } from '@/app/[locale]/(home)/new&blog/_sections/faq'
import { IeltsNews } from '@/app/[locale]/(home)/new&blog/_sections/ieltsNews'
import { MinimalNews } from '@/app/[locale]/(home)/new&blog/_sections/minimalNews'
import { NewsBig } from '@/app/[locale]/(home)/new&blog/_sections/newsBig'
import { Tips } from '@/app/[locale]/(home)/new&blog/_sections/tips'
import { Data } from '@/app/[locale]/type'
import { SubNavbar } from '@/components/layout/subNavbar'
import React from 'react'

export const NewsAndBlog: React.FC<{data: Data}> = ({data}) => {
  const [tabs, setTabs] = React.useState("all")
  return (
    <>
        <SubNavbar tabs={tabs} setTabs={setTabs}/>
        <NewsBig
          tag={data.news_blog.tips[0].tag}
          description={data.news_blog.tips[0].description} 
          href={data.news_blog.tips[0].href} 
          image={data.news_blog.tips[0].image} 
          publishInfor={data.news_blog.tips[0].publishInfor} 
          title={data.news_blog.tips[0].title}
        />
        {(tabs === "tips" || tabs === "all") && <Tips tips={data.news_blog.tips}/>}
        {(tabs === "ielts news" || tabs === "all") && <IeltsNews ieltsNews={data.news_blog.ieltsNews} />}
        {(tabs === "minimal english news" || tabs === "all") && <MinimalNews minimalNews={data.news_blog.minimalNews} />}
        {(tabs === "FAQ" || tabs === "all") && <Faq faq={data.news_blog.faq} />}
    </>
  )
}
