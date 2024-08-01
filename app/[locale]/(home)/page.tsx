import { BenefitsSection } from "./_sections/benefits";
import { FAQSection } from "./_sections/faq";
import { FeaturesSection } from "./_sections/features";
import { HeroSection } from "./_sections/hero";
import { PricingSection } from "./_sections/pricing";
import { ServicesSection } from "./_sections/services";
import { SponsorsSection } from "./_sections/sponsors";
import { TeamSection } from "./_sections/team";
import { TestimonialSection } from "./_sections/testimonial";

export default function Home() {
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
  );
}
