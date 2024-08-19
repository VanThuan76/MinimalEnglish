import React from 'react';
import { useTranslations } from 'next-intl';
import { useSectionByPage } from '@/schema/services/common';


export const Register = () => {
  const page_content = useSectionByPage(5).data
  console.log(page_content);
  const t = useTranslations();
  return (
    <div
      className={"bg-[#FFFFFF] flex flex-col justify-center content-center px-[16px] py-[60px] md:px-[80px] md:py-[106px]"}>
      <div className={"w-full flex justify-center text-[#BE5C59] font-[700] text-[16px]"}>
        {t('register.label.title')}
      </div>
      <div className={"w-full flex justify-center text-[#000F30] font-[700] text-[48px] mb-4"}>
        {t('register.label.name')}
      </div>
      <div className={"text-black"}>
        <div className="text-container" dangerouslySetInnerHTML={{ __html: page_content ? page_content[0]?.vi_description || page_content[0]?.en_description  : '' }} />
      </div>
    </div>

  );
};

export default Register;
