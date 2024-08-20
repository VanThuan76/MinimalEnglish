"use client"

import { Banner } from "@/app/[locale]/(home)/_sections/banner";
import { AboutUs } from "@/app/[locale]/(home)/_sections/about_us";
import { Class } from "@/app/[locale]/(home)/_sections/class";
import { WhyUs } from "@/app/[locale]/(home)/_sections/why_us";
import { Video } from "@/app/[locale]/(home)/_sections/video";
import { Feedback } from "@/app/[locale]/(home)/_sections/feedback";
import { useSectionByPage } from "@/schema/services/common";


export default function Home() {
  const {data: section, isLoading} = useSectionByPage(1)
  if (isLoading) return <></>
  
  return (
    <>
      <Banner data={section[0]}/>
      <AboutUs data={section[1]}/> 
      <Class />
      <Feedback />
      <WhyUs data={section[4]}/>
      <Video data={section[5]}/>
    </>
  );
}

