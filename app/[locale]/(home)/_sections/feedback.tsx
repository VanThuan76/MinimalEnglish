import { Testimonial } from '@/app/[locale]/type'
import EmblaCarousel from '@/components/ui/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import React from 'react'

export const Feedback = ({title, label, info_testimonials}: Testimonial) => {
  return (
    <section className='flex [@media(max-width:1023px)]:flex-col justify-between px-4 lg:px-24 py-12 md:py-16 bg-white'>
        <div className='lg:w-[360px] xl:w-[460px]'>
          <h2 className='text-base text-[#BE5C59] font-bold mb-6'>{label}</h2>
          <h2 className='text-[32px] font-[600] xl:text-[48px] lg:font-bold text-[#000F30] leading-relaxed'>{title}</h2>
        </div>
        
        {/* desktop */}
        <div className='hidden lg:grid grid-cols-2 place-items-center bg-[#FDF6EB] shadow-xl rounded-2xl lg:w-[550px] lg:h-[514px] xl:w-[688px] xl:h-[644px] '>
            <EmblaCarousel info_testimonials={info_testimonials} options={{axis: 'y', loop: true, }}/>
            <EmblaCarousel info_testimonials={info_testimonials} options={{axis: 'y', loop: true}} scrollPrev={true}/>
        </div>

        {/* mobile */}
        <div className='grid lg:hidden grid-row-2 place-items-center bg-[#FDF6EB] gap-4 rounded-2xl w-full h-[680px] py-4'>
            <EmblaCarousel info_testimonials={info_testimonials} options={{axis: 'x', loop: true, }}/>
            <EmblaCarousel info_testimonials={info_testimonials} options={{axis: 'x', loop: true}} scrollPrev={true}/>
        </div>
    </section>
  )
}
