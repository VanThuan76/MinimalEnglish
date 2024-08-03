"use client";
import { Testimonial } from "@/app/[locale]/type";
import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '@/components/ui/emblaCarousel/EmblaCarousel'

export const Testimonials = ({label, title, info_testimonials}: Testimonial) => {
  const OPTIONS: EmblaOptionsType = { align: 'start' }

  return (
    <section id="testimonials" className="py-24 sm:py-32 px-4 md:px-24 bg-white">
      <div className="mb-16 lg:mb-20 mx-2 md:mx-5">
        <h2 className="text-base font-bold text-[#BE5C59] text-left mb-5 tracking-wider">
          {label}
        </h2>

        <h2 className="text-3xl md:text-[48px] text-left font-[600] md:font-bold text-[#000F30] my-4 max-w-[830px] leading-relaxed">
          {title}
        </h2> 
      </div>

      <EmblaCarousel info_testimonials={info_testimonials} options={OPTIONS} />
    </section>
  );
};
