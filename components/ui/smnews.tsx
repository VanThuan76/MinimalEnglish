import { IeltsNews } from '@/app/[locale]/type'
import { Badge } from '@/components/ui/badge'
import { Link } from '@/navigation'
import { CircleArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export const SmNews = ({image, publishInfor ,title, tag, description, href } :IeltsNews) => {  

    console.log(href);
    
  return (
    <div className='flex flex-col w-full max-w-[390px] justify-between gap-6'>
        <div className='relative w-full max-w-[390px] h-[200px] rounded-xl overflow-hidden'>
        <Image 
            fill
            style={{objectFit: "cover"}}
            src={image}
            alt="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        </div>

        <div className='w-full flex flex-col gap-3 text-black'>
        <div className='w-full flex justify-between items-center'>
            <Badge variant={'secondary'} className='p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal hover:text-white'>{tag}</Badge>
            <div className='text-base font-normal'>{publishInfor}</div>
        </div>
    
        <div className=' text-2xl font-semibold leading-9 '>
            {title}
        </div>

        <div className='text-base font-normal text-[#514F4F]'>
            {description}
        </div>

        <Link href={href} className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] px-0 group/arrow'>
            Đọc bài 
            <CircleArrowRight strokeWidth={1.5} size={20} className='group-hover/arrow:translate-x-2 transition-transform'/>
        </Link>
        </div>
    </div>
  )
} 
