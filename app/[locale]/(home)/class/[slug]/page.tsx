'use client'
import ClassDetail from '@/app/[locale]/(home)/class/[slug]/_selections/class_detail';
import { useGetClassData } from '@/schema/services/class';


export default function Page({ params }: { params: { slug: string } }) {
  const class_detail = useGetClassData(params.slug)
  return (
        <section className='bg-[#FFFFFF] px-[0px] md:px-[80px] pt-3 md:pt-10'>
          <ClassDetail data_detail={class_detail.data}> </ClassDetail>
        </section>
        
    );
}
