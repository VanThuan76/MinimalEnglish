import { ListNews } from '@/app/[locale]/type'
import { Badge } from '@/components/ui/badge'
import { Link } from '@/navigation'
import { CircleArrowRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export const NewsBig = ({tag,image,description,created_at, read_time,title, href}: ListNews) => {
  const t = useTranslations()
  const [year, month, day] = created_at.split(' ')[0].split('-');
  const publishInfor = `${day}/${month}/${year} - ${read_time} ${t("readtime")}`
  return (
    <section className='bg-white px-[16px] md:px-[80px] pt-3 md:pt-20'>
      <div className='flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-0'>
        <div className='relative w-full h-[200px] lg:w-[450px] lg:h-[285px] xl:w-[634px] xl:h-[402px] rounded-xl overflow-hidden'>
          <Image 
            fill
            style={{objectFit: "cover"}}
            src={`/${image}`}
            alt="image"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className='w-full lg:w-[383px] xl:w-[430px] 2xl:w-[615px] flex flex-col gap-3 xl:gap-[20px] text-black'>
          <div className='w-full flex justify-between items-center'>
            <Badge variant={'secondary'} className='p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal'>{tag}</Badge>
            <div className='text-base font-normal'>{publishInfor}</div>
          </div>
          
          <div className='lg:text-[32px] text-2xl font-semibold leading-9 lg:leading-[52px]'>
            {title}
          </div>

          <div className='text-base font-normal text-[#514F4F]'>
            {description}
          </div>

          <Link href={`/news&blog/${href}`} className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] lg:text-2xl px-0 group/arrow'>
            {t("read")}
            <CircleArrowRight strokeWidth={1.5} size={20} className='group-hover/arrow:translate-x-2 transition-transform'/>
          </Link>
        </div>
      </div>
    </section>
  )
}