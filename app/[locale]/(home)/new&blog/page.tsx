import { BenefitsSection } from "@/app/[locale]/(home)/_sections/benefits"
import { FAQSection } from "@/app/[locale]/(home)/_sections/faq"
import { FeaturesSection } from "@/app/[locale]/(home)/_sections/features"
import { HeroSection } from "@/app/[locale]/(home)/_sections/hero"
import { PricingSection } from "@/app/[locale]/(home)/_sections/pricing"
import { ServicesSection } from "@/app/[locale]/(home)/_sections/services"
import { SponsorsSection } from "@/app/[locale]/(home)/_sections/sponsors"
import { TeamSection } from "@/app/[locale]/(home)/_sections/team"
import { TestimonialSection } from "@/app/[locale]/(home)/_sections/testimonial"
import { NewsBig } from "@/app/[locale]/(home)/new&blog/_sections/newsBig"
import { getData } from "@/app/[locale]/(home)/page"
import { Data, IeltsNews } from "@/app/[locale]/type"

export default async function NewAndBlog(){
  const data: Data = await getData()
  const listdata: IeltsNews[] = data.news_blog.ieltsNews.splice(1)

  return (
    <>
      <NewsBig 
        tag={data.news_blog.ieltsNews[0].tag}
        image={data.news_blog.ieltsNews[0].image}
        publishInfor={data.news_blog.ieltsNews[0].publishInfor}
        title={data.news_blog.ieltsNews[0].title}
        description={data.news_blog.ieltsNews[0].description}
      />
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <PricingSection />
      <FAQSection />
    </>
  )
}
