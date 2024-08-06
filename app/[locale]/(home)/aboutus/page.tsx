import { Misson } from "@/app/[locale]/(home)/aboutus/_sections/misson";
import { Vision } from "@/app/[locale]/(home)/aboutus/_sections/vision";
import { getData } from "@/app/[locale]/(home)/page";
import BrandStory from "@/app/[locale]/(home)/aboutus/_sections/BrandStory";
import  Highlight from "@/app/[locale]/(home)/aboutus/_sections/highlights"

import { Data } from "@/app/[locale]/type";
import { Feedback } from "@/app/[locale]/(home)/aboutus/_sections/feedback copy";

export default async function About() {
  const data: Data = await getData();
  const res = await fetch('https://siuuuu-8f55.onrender.com/api/users');
  const data2: Data = await res.json();
  return (
    <>
        <Misson label={data.about_us.mission.label} image={data.about_us.mission.image} content={data.about_us.mission.content}/>
        <Vision label={data.about_us.vision.label} image={data.about_us.vision.image} content={data.about_us.vision.content}/>
        <BrandStory
          label={data2.about_us.brand_story.label}
          description={data2.about_us.brand_story.description}
          detail_stories={data2.about_us.brand_story.detail_stories}
        />
        <Highlight
          label={data2.about_us.highlights.label}
          description={data2.about_us.highlights.description}
          lecturers={data2.about_us.highlights.lecturers}
          teaching_methods={data2.about_us.highlights.teaching_methods}
        />
        <Feedback 
          title={data.home.testimonial.title}
          label={data.home.testimonial.label} 
          info_testimonials={data.home.testimonial.info_testimonials} 
        />

    </>
  )
}
