'use client';

import { Misson } from "@/app/[locale]/(home)/aboutus/_sections/misson";
import { Vision } from "@/app/[locale]/(home)/aboutus/_sections/vision";
import BrandStory from "@/app/[locale]/(home)/aboutus/_sections/BrandStory";
import { Highlight } from "@/app/[locale]/(home)/aboutus/_sections/highlights";
import Lectures from "@/app/[locale]/(home)/aboutus/_sections/lectures";
import { useSectionByPage } from "@/schema/services/common";
import { Feedback } from "@/components/layout/feedback";

export default function AboutUs() {
  const { data: sections, isLoading } = useSectionByPage(2);

  if (isLoading) return <></>;

 /*  console.log('Section Data:', sections); */

  return (
    <>
      <Misson data={sections?.[0]} />
      <Vision data={sections?.[1]} />
      <BrandStory data={sections?.[2]} />   
      <Highlight data={sections?.[3]} />
      <Lectures data={sections?.[4]} />
      {/* <Feedback /> */}
    </>
  );
}
