import { IeltsNews } from '@/app/[locale]/type'
import { Badge } from '@/components/ui/badge'
import { Link } from '@/navigation'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const NewsBig = ({tag,image,description,publishInfor,title, href}: IeltsNews) => {
  return (
    <section className='bg-white px-[16px] md:px-[80px] pt-3 md:pt-10'>
      <div className='flex [@media(max-width:1000px)]:flex-col w-full justify-between [@media(max-width:1000px)]:gap-6'>
        <div className='relative w-full h-[200px] lg:w-[450px] lg:h-[285px] xl:w-[634px] xl:h-[402px] rounded-xl overflow-hidden'>
          <Image 
            fill
            style={{objectFit: "cover"}}
            src={image}
            alt="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className='w-full xl:w-[430px] [@media(min-width:1440px)]:w-[559px] flex flex-col gap-3 xl:gap-[20px] text-black'>
          <div className='w-full flex justify-between items-center'>
            <Badge variant={'secondary'} className='p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal hover:text-white'>{tag}</Badge>
            <div className='text-base font-normal'>{publishInfor}</div>
          </div>
          
          <div className='lg:text-[32px] text-2xl font-semibold leading-9 lg:leading-[52px]'>
            {title}
          </div>

          <div className='text-base font-normal text-[#514F4F]'>
            {description}
          </div>

          <Link href={href} className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] lg:text-2xl px-0 group/arrow'>
            Đọc bài 
            <CircleArrowRight strokeWidth={1.5} size={20} className='group-hover/arrow:translate-x-2 transition-transform'/>
          </Link>
        </div>
      </div>
    </section>
  )
}
