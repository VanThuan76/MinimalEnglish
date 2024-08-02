import LectureIcon from '@/components/icons/lecture-icon';
import TeachMethodIcon from '@/components/icons/teach-method-icon';
import StarBlingIcon from '@/components/icons/star-bling-icon';
import React from 'react';
import { Highlights } from '@/app/[locale]/type';


export const Highlight = ({label,description,lecturers,teaching_methods}:Highlights) => {
  return (
    <div className="px-[106px] py-[40px;80px] gap-20 font-sans bg-white">
      <h1 className="gap-6 text-center mb-5 font-[600] text-[#BE5C59] text-[48px] md:font-bold">{label}</h1>
      <p className="text-[#514F4f] text-[18px] list-disc mb-10 text-center">
        {description}
      </p>
      <div className="grid lg:grid-cols-2 place-items-center gap-11">
        
          <div className="mb-10">
            <div className="gap-5">
              <LectureIcon />
            </div>         
          <div className="font-[400] text-black text-[30px] md:font-bold mb-[10px]">
            {lecturers.title}
            </div>
            <p className="t-[17px] text-[#514F4f] text-[18px] flex flex-col">                   
            {lecturers.content.map((content, index)=>(
              <li key = {index} className="flex">
                <StarBlingIcon className="mr-2" />   
                {content}
              </li>
            ))}         
            </p>                       
          </div>

          <div className='mb-10'>
          <div className="gap-5">
              <TeachMethodIcon />
            </div>
          <div className="font-[400] text-black text-[30px] md:font-bold mb-[10px]">{teaching_methods.title}</div>         
          <p className="t-[17px] text-[#514F4f] text-[18px] flex flex-col">
          
            {teaching_methods.content.map((content, index)=>(
              
              <li key = {index} className="flex">
                <StarBlingIcon className="mr-2" />   
                {content}
              </li>
            ))}</p>    
             
          </div>
        </div>       
      </div>
  );
};

export default Highlight;
  