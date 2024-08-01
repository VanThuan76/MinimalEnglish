import BrandStory from "@/app/[locale]/(home)/aboutus/_sections/BrandStory";
import { Misson } from "@/app/[locale]/(home)/aboutus/_sections/mission"
import  Highlight from "@/app/[locale]/(home)/aboutus/_sections/highlights"
import Lecturers from "@/app/[locale]/(home)/aboutus/_sections/Lecturers";

export default function About() {
  return (
    <>
        <Misson />
        <BrandStory />
        <Highlight />
        <Lecturers />
    </>
  )
}