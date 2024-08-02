import { Banner } from "@/app/[locale]/(home)/_sections/banner";
import { BenefitsSection } from "./_sections/benefits";
import { FAQSection } from "./_sections/faq";
import { FeaturesSection } from "./_sections/features";
import { FooterSection } from "./_sections/footer";
import { HeroSection } from "./_sections/hero";
import { PricingSection } from "./_sections/pricing";
import { ServicesSection } from "./_sections/services";
import { SponsorsSection } from "./_sections/sponsors";
import { TeamSection } from "./_sections/team";
import { TestimonialSection } from "./_sections/testimonial";
import { AboutUs } from "@/app/[locale]/(home)/_sections/about_us";
import { Data } from "@/app/[locale]/type";
import { Class } from "@/app/[locale]/(home)/_sections/class";

export async function getData() {
  const res = await fetch('https://siuuuu-8f55.onrender.com/api/users',{
    headers: {
      'Cache-Control': 'no-cache', // hoặc 'max-age=0'
    }
  });
  
  return res.json()
}

export default async function Home() {
  const data: Data = await getData();

  return (
    <>
      <Banner title={data.home.banner.title} image={data.home.banner.image} slogan={data.home.banner.slogan} content={data.home.banner.content}/>
      <AboutUs title={data.home.about_us.title} label={data.home.about_us.label} content={data.home.about_us.content} image={data.home.about_us.image}/>
      <Class title={data.home.outstanding_class.title} label={data.home.outstanding_class.label} info_classes={data.home.outstanding_class.info_classes}/>
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
