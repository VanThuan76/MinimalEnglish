import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import useEmblaCarousel from 'embla-carousel-react'
import { Info_testimonials } from '@/app/[locale]/type'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'

type PropType = {
  info_testimonials: Info_testimonials[],
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { info_testimonials, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <section className="w-full flex flex-col gap-12">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y touch-pinch-zoom">
          {info_testimonials.map(({name, address, content, image}, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] lg:flex-[0_0_50%]"
            >
              <Card className="mr-2 lg:mr-7">
                <CardHeader className="px-0 max-w-[456px] flex flex-row justify-between">
                  <div className="flex flex-row items-center gap-4">
                  <div className="relative w-[70px] h-[70px] overflow-hidden rounded-full">
                    <Image 
                    fill={true}
                    style={{
                      objectFit: "cover"
                    }}
                    src={image}
                    alt="quote"
                    />
                  </div>

                    <div className="flex flex-col">
                      <CardTitle className="text-2xl font-[600] text-[#000F30]">{name}</CardTitle>
                      <CardDescription className="text-base font-[400] text-[#000F30]">{address}</CardDescription>
                    </div>
                  </div>

                  <div className="relative w-[44px] h-[31.84px] overflow-hidden">
                    <Image 
                    fill={true}
                    style={{
                      objectFit: "cover"
                    }}
                    src={"/images/Vector.png"}
                    alt="quote"
                    />
                  </div>
                </CardHeader>

                <CardContent className="text-base font-[400] text-[#000F30]">
                  {content}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-row justify-center gap-40">
        <PrevButton 
          onClick={onPrevButtonClick} 
          disabled={prevBtnDisabled} 
          className="hidden lg:flex justify-center items-center w-11 h-11 rounded-lg border-none disabled:bg-white bg-[#BE5C59] disabled:text-black shadow-2xl shadow-red-800"
        />

        <div className="flex flex-row gap-3 items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'w-3 h-3 rounded-full '.concat(
                index === selectedIndex ? 'bg-[#BE5C59]' : 'bg-[#CFD3D6]'
              )}
            />
          ))}
        </div>

        <NextButton 
          onClick={onNextButtonClick} 
          disabled={nextBtnDisabled} 
          className='hidden lg:flex justify-center items-center w-11 h-11 rounded-lg border-none disabled:bg-white bg-[#BE5C59] disabled:text-black shadow-2xl shadow-red-800'  
        />
      </div>
    </section>
  )
}

export default EmblaCarousel