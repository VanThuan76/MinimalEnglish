import { Misson } from "@/app/[locale]/(home)/aboutus/_sections/misson";
import { Vision } from "@/app/[locale]/(home)/aboutus/_sections/vision";
import { Data } from "@/app/[locale]/type";

export default async function About() {
  const res = await fetch('https://siuuuu-8f55.onrender.com/api/users');
  const data: Data = await res.json();
  
  return (
    <>
        <Misson label={data.about_us.mission.label} content_1={data.about_us.mission.content_1} content_2={data.about_us.mission.content_2}/>
        <Vision label={data.about_us.vision.label} content={data.about_us.vision.content}/>
    </>
  )
}