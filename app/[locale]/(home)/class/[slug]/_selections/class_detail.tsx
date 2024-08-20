'use client'

import React from 'react';
import { ClassData } from '@/app/[locale]/type';
import { useTranslations } from 'next-intl';
import Image from 'next/image';


export const ClassDetail: React.FC<ClassData> = ({ data_detail}) => {
  const t = useTranslations();
    return (
      <>
        <div className={"w-full flex justify-center text-[#BE5C59] font-[700] text-[16px]"}>
          {t('class.label.title')}
        </div>
        <div className={"w-full flex justify-center text-[#000F30] font-[700] text-[48px] mb-4"}>
          {data_detail?.name}
        </div>
        <div className={"relative w-full h-[428px] md:h-[740px] mb-4"}>
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${data_detail?.image} ` as string}
            alt="image about class"
            fill
            style={{
              objectFit: "cover"
            }}
            className={"rounded-[32px]"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="font-sans text-black md:py-[40px]">
          <div className="text-container" dangerouslySetInnerHTML={{ __html: data_detail?.content || '' }} />
        </div>
      </>

    );
};

export default ClassDetail;
