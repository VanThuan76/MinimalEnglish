import LectureIcon from '@/components/icons/lecture-icon';
import TeachMethodIcon from '@/components/icons/teach-method-icon';
import StarBlingIcon from '@/components/icons/star-bling-icon';
import React from 'react';
import { Highlights } from '@/app/[locale]/type';

export const Highlight = ({ label, description, lecturers, teaching_methods }: Highlights) => {
  return (
    <div className="px-6 py-10 bg-[#FFFFFF] sm:px-[32px] lg:px-[106px] lg:py-[40px;80px]">
      <h1 className="text-center mb-5 leading-[76px] font-[700] text-[#BE5C59] text-[48px] sm:text-[48px] md:font-bold">{label}</h1>
      <p className="text-[#514F4F] text-[20px] leading-8 p-3 font-normal sm:text-[20px] list-disc mb-10 text-center">
        {description}
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-11">
        <div className="flex flex-col items-start mb-10">
          <div className="mb-5">
            <LectureIcon />
          </div>
          <div className="font-[600] text-[#000F30] p-3 leading-[52px] text-[32px] sm:text-[32px] md:font-bold mb-[10px]">
            {lecturers.title}
          </div>
          <ul className="text-[20px] sm:text-[20px] leading-8 font-normal p-3 text-[#282B27] flex flex-col space-y-4">
            {lecturers.content.map((content, index) => (
              <li key={index} className="flex items-start space-x-3">
                <StarBlingIcon className="w-[24px] h-[24px] flex-shrink-0" />
                <span className="flex-1">{content}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-start mb-10">
          <div className="mb-5">
            <TeachMethodIcon />
          </div>
          <div className="font-[600] text-[#000F30] p-3 leading-[52px] text-[32px] sm:text-[32px] md:font-bold mb-[10px]">
            {teaching_methods.title}
          </div>
          <ul className="text-[20px] sm:text-[20px] leading-8 font-normal p-3 text-[#282B27] flex flex-col space-y-4">
            {teaching_methods.content.map((content, index) => (
              <li key={index} className="flex items-start space-x-3">
                <StarBlingIcon className="w-[24px] h-[24px] flex-shrink-0" />
                <span className="flex-1">{content}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
