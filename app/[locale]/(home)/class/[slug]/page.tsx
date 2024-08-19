'use client'
import ClassDetail from '@/app/[locale]/(home)/class/[slug]/_selections/class_detail';
import { useGetClassData } from '@/schema/services/class';
import { useEffect } from 'react';
import ClassRegister from '@/app/[locale]/(home)/class/[slug]/_selections/class_register';


export default function Page({ params }: { params: { slug: string } }) {
  const class_detail = useGetClassData(params.slug);
  useEffect(() => {
    class_detail.refetch()
  }, [class_detail, params.slug])
  return (
        <section className='bg-[#FFFFFF] px-[8px] py-[60px] md:px-[106px] md:py-[80px]'>
          <ClassDetail data_detail={class_detail.data}> </ClassDetail>
          <ClassRegister></ClassRegister>
        </section>
        
    );
}
