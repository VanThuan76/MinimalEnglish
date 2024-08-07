import { BenefitsSection } from "@/app/[locale]/(home)/_sections/benefits"
import { FAQSection } from "@/app/[locale]/(home)/_sections/faq"
import { FeaturesSection } from "@/app/[locale]/(home)/_sections/features"
import { HeroSection } from "@/app/[locale]/(home)/_sections/hero"
import { PricingSection } from "@/app/[locale]/(home)/_sections/pricing"
import { ServicesSection } from "@/app/[locale]/(home)/_sections/services"
import { SponsorsSection } from "@/app/[locale]/(home)/_sections/sponsors"
import { TeamSection } from "@/app/[locale]/(home)/_sections/team"
import { TestimonialSection } from "@/app/[locale]/(home)/_sections/testimonial"
import { getData } from "@/app/[locale]/(home)/page"
import { Data } from "@/app/[locale]/type"

export default async function NewAndBlog(){
  const data: Data = await getData()
  return (
    <>
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
