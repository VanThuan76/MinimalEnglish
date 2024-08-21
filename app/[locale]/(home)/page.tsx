"use client"

import { Banner } from "@/app/[locale]/(home)/_sections/banner";
import { AboutUs } from "@/app/[locale]/(home)/_sections/about_us";
import { Class } from "@/app/[locale]/(home)/_sections/class";
import { WhyUs } from "@/app/[locale]/(home)/_sections/why_us";
import { Video } from "@/app/[locale]/(home)/_sections/video";

import { useSectionByPage } from "@/schema/services/common";
import { Feedback } from "@/components/layout/feedback";


export default function Home() {
  const {data: section} = useSectionByPage(1)
  
  return (
    <>
      {
        section && <>
          <Banner data={section[0]}/>
          <AboutUs data={section[1]}/>
          <Class />
          <Feedback />
          <WhyUs data={section[4]}/>
          <Video data={section[5]}/>
        </>
      }
  </>
  );
}

