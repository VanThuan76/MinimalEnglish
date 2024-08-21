"use client"

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { Feedback } from '@/app/[locale]/type'

type PropType = {
  info_testimonials: Feedback[] | undefined
  options?: EmblaOptionsType
  scrollPrev?: boolean
}

const EmblaCarousel: React.FC<PropType> = ({ info_testimonials, options, scrollPrev }) => {
  const customOptions: EmblaOptionsType = { skipSnaps: true, duration: 350, ...options }
  const [emblaRef, emblaApi] = useEmblaCarousel(customOptions)

  useEffect(() => {
    if (emblaApi) {
      const scroll = scrollPrev ? emblaApi.scrollPrev : emblaApi.scrollNext;
      const interval = setInterval(scroll, 11000);
      return () => clearInterval(interval);
    }
  }, [emblaApi, scrollPrev]);

  return (
    <div className="overflow-hidden h-full w-full lg:w-auto" ref={emblaRef}>
      <div className="flex lg:mt-0 h-full lg:flex-col">
        {info_testimonials &&
        info_testimonials.map(({ image }) => (
          <div 
            className="relative touch-pan-x touch-pinch-zoom flex-[0_0_50%] lg:flex-[0_0_100%] w-[146px] h-[316px] lg:w-[230px] lg:h-[384px] xl:w-[280px] xl:h-[538px] lg:mt-6 mx-2 lg:mx-0" 
            key={image}
          >
            <Image
              fill
              style={{ objectFit: "cover" }}
              src={`/${image}`}
              alt="Testimonial image"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
