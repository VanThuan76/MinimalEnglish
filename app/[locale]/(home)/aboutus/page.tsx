'use client'

import { Misson } from "@/app/[locale]/(home)/aboutus/_sections/misson";
import { Vision } from "@/app/[locale]/(home)/aboutus/_sections/vision";
import BrandStory from "@/app/[locale]/(home)/aboutus/_sections/BrandStory";
import {Highlight} from "@/app/[locale]/(home)/aboutus/_sections/highlights"
import { Feedback } from "@/app/[locale]/(home)/aboutus/_sections/feedback";
import Lectures from "@/app/[locale]/(home)/aboutus/_sections/lectures";

export default  function AboutUs() {

  return (
    <> 
        <Misson />  
        <Vision />  
        <BrandStory /> 
        <Highlight />
        <Lectures />
        {/* <Feedback /> */}
    </>
  )
}
