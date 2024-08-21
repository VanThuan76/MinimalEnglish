import Image from 'next/image'
import { CircleArrowRight } from 'lucide-react'

import { useRouter } from '@/navigation' 
import { useTranslations } from 'next-intl'

import { Badge } from '@/components/ui/badge'
import { ListNews } from '@/app/[locale]/type'

export const NewsBig = ({ tag, image, description, created_at, read_time, title, href }: ListNews) => {
    const t = useTranslations()
    const router = useRouter()

    const [year, month, day] = created_at.split(' ')[0].split('-');
    const publishInfor = `${day}/${month}/${year} - ${read_time} ${t("readtime")}`

    return (
        <section className='bg-white px-[16px] md:px-[80px] pt-3 md:pt-20'>
            <div className='flex [@media(max-width:1000px)]:flex-col w-full justify-between [@media(max-width:1000px)]:gap-6'>
                <div className='relative w-full h-[200px] lg:w-[450px] lg:h-[285px] xl:w-[634px] xl:h-[402px] rounded-xl overflow-hidden'>
                    <Image
                        fill
                        style={{ objectFit: "cover" }}
                        src={`/${image}`}
                        alt="image"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                <div className='w-full lg:w-[383px] xl:w-[430px] [@media(min-width:1440px)]:w-[615px] flex flex-col gap-3 xl:gap-[20px] text-black'>
                    <div className='flex items-center justify-between w-full'>
                        <Badge variant={'secondary'} className='p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal'>{tag}</Badge>
                        <div className='text-base font-normal'>{publishInfor}</div>
                    </div>

                    <div className='lg:text-[32px] text-2xl font-semibold leading-9 lg:leading-[52px]'>
                        {title}
                    </div>

                    <div className='text-base font-normal text-[#514F4F]'>
                        {description}
                    </div>

                    <div onClick={() => router.push(`/news&blog/${href}`)} className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] lg:text-2xl px-0 group/arrow'>
                        {t("read")}
                        <CircleArrowRight strokeWidth={1.5} size={20} className='transition-transform group-hover/arrow:translate-x-2' />
                    </div>
                </div>
            </div>
        </section>
    )
}
