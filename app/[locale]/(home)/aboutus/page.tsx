import { Misson } from "@/app/[locale]/(home)/aboutus/_sections/misson";
import { Vision } from "@/app/[locale]/(home)/aboutus/_sections/vision";
import { getData } from "@/app/[locale]/(home)/page";
import { Data } from "@/app/[locale]/type";

export default async function About() {
  const data: Data = await getData();

  return (
    <>
        <Misson label={data.about_us.mission.label} image={data.about_us.mission.image} content={data.about_us.mission.content}/>
        <Vision label={data.about_us.vision.label} image={data.about_us.vision.image} content={data.about_us.vision.content}/>
    </>
  )
}
