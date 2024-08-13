import React from 'react';
import Image from 'next/image';
import { lectures } from '@/app/[locale]/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

export const Lectures = ({ label, description, detail_lectures }: lectures) => {
  return (
    <div className="px-6 py-10 md:px-[80px] md:py-[40px;80px] font-bold gap-20 font-sans bg-[#FDF6EB]">
      <h1 className="gap-2 text-[#BE5C59] text-[16px] leading-6 md:text-[20px] md:leading-6 text-left">
        {label}
      </h1>
      <p className="text-[#000F30] text-[32px] leading-[52px] font-semibold md:text-[48px] md:leading-[76px] md:font-bold text-left gap-2">
        {description}
      </p>
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
        {detail_lectures.map(({ year, username, content, image }, index) => (
          <div
            key={index}
            className="relative p-3 border rounded-lg bg-[#ffffff] border-[#ffffff]"
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
            <p className="text-[#000F30] md:font-semibold md:leading-9 text-[24px] md:text-[24px]">{year}</p>
            <p className="text-[#514F4F] md:font-normal md:leading-6 text-[16px] md:text-[18px] mb-2 mt-1">{username}</p>
            <div className="text-[#514F4F] text-[16px] md:font-normal md:text-[16px] md:leading-6">
              {content.map((item, itemIndex) => (
                <div key={itemIndex} className="flex items-start space-x-2">
                  <FontAwesomeIcon icon={faCircle} className="mt-2.5 w-1 h-1 flex-shrink-0 ml-3" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lectures;
