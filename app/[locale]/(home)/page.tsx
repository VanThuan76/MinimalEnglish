'use client'

import { Banner } from "@/app/[locale]/(home)/_sections/banner";
import { AboutUs } from "@/app/[locale]/(home)/_sections/about_us";
import { Data } from "@/app/[locale]/type";
import { Class } from "@/app/[locale]/(home)/_sections/class";
import { WhyUs } from "@/app/[locale]/(home)/_sections/why_us";
import { Video } from "@/app/[locale]/(home)/_sections/video";
import { Feedback } from "@/app/[locale]/(home)/_sections/feedback";
import { useGeData } from "@/schema/services/data";

export async function getData() {
  const res = await fetch('https://siuuuu-8f55.onrender.com/api/users',{
    method: 'GET',
    cache: 'no-cache',
  });
  
  return res.json()
}

export default  function Home() {
  const {data: t} = useGeData()
  return (
    <>
      {/*<Banner title={data.home.banner.title} image={data.home.banner.image} slogan={data.home.banner.slogan} content={data.home.banner.content}/>*/}
      {/*<AboutUs title={data.home.about_us.title} label={data.home.about_us.label} content={data.home.about_us.content} image={data.home.about_us.image}/>*/}
      {/*<Class title={data.home.outstanding_class.title} label={data.home.outstanding_class.label} info_classes={data.home.outstanding_class.info_classes}/>*/}
      {/*<Feedback title={data.home.testimonial.title} label={data.home.testimonial.label} info_testimonials={data.home.testimonial.info_testimonials} />*/}
      {/*<WhyUs title={data.home.why_us.title} image={data.home.why_us.image} label={data.home.why_us.label} info_why_us={data.home.why_us.info_why_us}/>*/}
      {/*<Video videoId={data.home.videoId}/>*/}
    </>
  );
}
