"use client"

import React, { useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { Info_testimonials } from '@/app/[locale]/type'
import Image from 'next/image'

type PropType = {
  info_testimonials: Info_testimonials[]
  options?: EmblaOptionsType
  scrollPrev?: boolean
  mobile?: boolean
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { info_testimonials , options, scrollPrev, mobile } = props
  const customOptions: EmblaOptionsType = { skipSnaps: true, duration: 350, ...options }
  const [emblaRef, emblaApi] = useEmblaCarousel(customOptions)

  useEffect(() => {
    if (emblaApi) {
      if(scrollPrev){
        const interval = setInterval(() => {
          emblaApi.scrollNext()
        }, 11000)

        interval
        return () => {
          clearInterval(interval);
        }
      }
      else {
        const interval = setInterval(() => {
          emblaApi.scrollPrev()
        }, 11000)
  
        interval
        return () => {
          clearInterval(interval);
        }
      }
    }
  }, [emblaApi, scrollPrev]);

  return (
    <div className="overflow-hidden h-full [@media(max-width:1023px)]:w-full " ref={emblaRef}>
      <div className="flex lg:mt-0 h-full lg:flex-col">
        {info_testimonials.map(( {image}, index) => (
          <div 
            className="relative touch-pan-x touch-pinch-zoom flex-[0_0_50%] lg:flex-[0_0_100%] w-[146px] h-[316px] lg:w-[230px] lg:h-[384px] xl:w-[280px] xl:h-[538px] lg:mt-6 mx-4 lg:mx-0" 
            key={index}
          >
            <Image
              fill={true}
              style={{objectFit: "cover"}}
              src={image}
              alt="image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default EmblaCarousel
