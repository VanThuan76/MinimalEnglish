import { Misson } from "@/app/[locale]/(home)/_sections/misson";
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
import { Vision } from "@/app/[locale]/(home)/_sections/vision";

export default function Home() {
  return (
    <>
      <Misson />
      <Vision />
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
