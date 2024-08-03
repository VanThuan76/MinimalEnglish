import {Testimonials} from "@/app/[locale]/(home)/aboutus/_sections/testimonials";
import BrandStory from "@/app/[locale]/(home)/aboutus/_sections/BrandStory";
import  Highlight from "@/app/[locale]/(home)/aboutus/_sections/highlights"

import { Data } from "@/app/[locale]/type";

export default async function About() {
  const res = await fetch('https://siuuuu-8f55.onrender.com/api/users');
  const data: Data = await res.json();
  return (
    <>      
      <BrandStory 
      label={data.about_us.brand_story.label} 
      description={data.about_us.brand_story.description}
      detail_stories={data.about_us.brand_story.detail_stories}    
      />
      <Highlight
      label={data.about_us.highlights.label}
      description={data.about_us.highlights.description}
      lecturers={data.about_us.highlights.lecturers}
      teaching_methods={data.about_us.highlights.teaching_methods}
      />   
      <Testimonials
      label={data.home.testimonial.label}
      title={data.home.testimonial.title}
      info_testimonials={data.home.testimonial.info_testimonials}
       />    
    </>
  )
}