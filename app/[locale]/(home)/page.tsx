import { Banner } from "@/app/[locale]/(home)/_sections/banner";
import { AboutUs } from "@/app/[locale]/(home)/_sections/about_us";
import { Class } from "@/app/[locale]/(home)/_sections/class";
import { WhyUs } from "@/app/[locale]/(home)/_sections/why_us";
import { Video } from "@/app/[locale]/(home)/_sections/video";
import { Feedback } from "@/app/[locale]/(home)/_sections/feedback";

export default function Home() {
  
  return (
    <>
      <Banner />
      <AboutUs />
      <Class />
      <Feedback />
      <WhyUs />
      <Video />
    </>
  );
}

