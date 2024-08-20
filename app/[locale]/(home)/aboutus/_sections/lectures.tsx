'use client'

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useGetComponent } from "@/schema/services/component";

export const Lecture = ({ data }: { data: any }) => {
  const t = useTranslations();
  const { data: components, isLoading } = useGetComponent({ section_id: 12, queryKey: 'lectures' });

if (!data || isLoading) return <div></div>

/* console.log('Lecture data:', components); */

  return (
    <div className="px-6 py-10 md:px-[80px] md:py-[40px;80px] font-bold gap-20 font-sans bg-[#FDF6EB]">
      <h1 className="gap-2 text-[#BE5C59] text-[16px] leading-6 md:text-[20px] md:leading-6 text-left">
        {data?.name || t('lectures.label.Title')}
      </h1>
      <p className="text-[#000F30] text-[32px] leading-[52px] font-semibold md:text-[48px] md:leading-[76px] md:font-bold text-left gap-2">
        {data?.description || t('lectures.Description')}
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
      {components?.map((item: any) => ( 
         <div key={item.id}          
            className="relative p-3 border rounded-lg bg-[#ffffff] border-[#ffffff]"
          >
           <div  className="w-full h-[500px] relative mb-4 flex-shrink-0">
            <Image 
              src={`/${item?.image}`} 
              alt={`${item?.image + 1}`}               
              layout="fill"
              objectFit="cover"
              className="rounded-lg"              
            />
           </div>
            <p className="text-[#000F30] md:font-semibold md:leading-9 text-[24px] md:text-[24px]">{item.title}</p>
            <div className="flex items-start space-x-2">            
            <span className="text-[#514F4F] md:font-normal md:leading-6 text-[16px] md:text-[18px] mb-2 mt-1 "
            style={{ lineHeight: '1.8', display: 'inline-block' }}
                dangerouslySetInnerHTML={{ __html: item?.content }}
                />
            </div>                     
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lecture;
