import { ListNews } from '@/app/[locale]/type'
import { Badge } from '@/components/ui/badge'
import { Link } from '@/navigation'
import { CircleArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const SmNews = ({image, created_at, read_time ,title, tag, description, href } :ListNews) => {   
  const t = useTranslations()
  const [year, month, day] = created_at.split(' ')[0].split('-');
  const publishInfor = `${day}/${month}/${year} - ${read_time} ${t("readtime")}`
  return (
    <div className='flex flex-col w-full max-w-[390px] justify-between gap-6'>
      <div className='relative w-full max-w-[390px] h-[200px] rounded-xl overflow-hidden'>
        <Image 
          fill
          style={{objectFit: "cover"}}
          src={`/${image}`}
          alt="image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className='w-full flex flex-col gap-3 text-black'>
        <div className='w-full flex justify-between items-center'>
          <Badge variant={'secondary'} className='p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal'>{tag}</Badge>
          <div className='text-base font-normal'>{publishInfor}</div>
        </div>

        <div className=' text-2xl font-semibold leading-9 '>
          {title}
        </div>

        <div className='text-base font-normal text-[#514F4F]'>
          {description}
        </div>

        <Link href={`/news&blog/${href}`} className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] px-0 group/arrow'>
          {t("read")}
          <CircleArrowRight strokeWidth={1.5} size={20} className='group-hover/arrow:translate-x-2 transition-transform'/>
        </Link>
      </div>
    </div>
  )
} 