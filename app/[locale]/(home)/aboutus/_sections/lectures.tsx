import React from 'react';
import Image from 'next/image';
import { lectures } from '@/app/[locale]/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCircleArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Lectures = ({ label, description, detail_lectures }: lectures) => {
  return (
    <div className="px-6 py-10 md:px-[106px] md:py-[40px;80px] font-bold gap-20 font-sans bg-[#FDF6EB]">
      <h1 className="gap-2 text-[#BE5C59] text-[16px] md:text-[20px] text-left">
        {label}
      </h1>
      <p className="text-[#000F30] text-[24px] md:text-[48px] list-disc md:font-bold">{description}</p>      
      <div className="relative grid grid-cols-1 md:grid-cols-3 mt-10">
        {detail_lectures.map(({ year, username, content, image }, index) => (
          <div
            key={index}
            className="relative p-4 border-[#ffffff]"
          >
           <div className="w-full h-[500px] relative mb-4 flex-shrink-0">
            <Image 
              src={image} 
              alt={`${index + 1}`}               
              layout="fill"
              objectFit="cover"
              className="rounded-lg" 
            />
           </div>
            <p className="text-[#000F30] text-[24px] md:text-[24px]">{year}</p>
            <p className="text-[#514F4F] text-[16px] md:text-[18px] mb-2">{username}</p>
            <p className="text-[#514F4F] text-[16px] ">
            <FontAwesomeIcon icon={faCircle} className="text-lg mr-2 w-2 h-2" />
            {content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lectures;
