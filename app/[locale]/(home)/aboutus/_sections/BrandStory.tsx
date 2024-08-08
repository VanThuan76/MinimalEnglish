import React from 'react';
import { Brand_story } from '@/app/[locale]/type';
import clsx from 'clsx';

export const BrandStory: React.FC<Brand_story> = ({ label, description, detail_stories }) => {
  return (
    <div className="px-4 py-10 font-sans bg-[#FDF6EB] md:px-[106px] md:py-[40px]">
      <h1 className="text-center leading-[76px] mb-0 font-bold text-[#BE5C59] text-3xl md:text-[48px] md:font-bold">
        {label}
      </h1>
      <div className="flex justify-center mb-10">
        <p className="text-[#514F4f] text-[20px] leading-8 font-normal text-center md:text-[20px] md:w-[1228px] h-auto md:h-[96px]">
          {description}
        </p>
      </div>
      <div className="relative w-full flex justify-center">
      <div className="relative w-full max-w-[920px]">
        {/* <div className="absolute left-1/2 w-0.5 h-[1000px] md:h-[640px] border-r-2 border-[#E5BEBD]"></div> */}
        {detail_stories.map(({ year, content }, index) => (
          <div key={index} className="flex items-start relative">
            {index % 2 === 0 ? (
              <>
                <div className={clsx("w-1/2 text-left pr-5 relative border-solid border-r-[2px] border-[#E5BEBD] transform translate-x-[1px]", index === detail_stories.length - 1 && "border-r-0")}>
                  <p className="text-[#514F4f] font-normal leading-6 md:text-[16px] mb-20">
                    {content}
                  </p>
                </div>
                <div className="w-1/2 text-center flex items-center relative justify-start">
                  <div className="w-fit flex items-start relative -translate-x-[10px] z-[2]">
                    <div className='flex items-center'>
                      <div className="right-[-20px] bg-[#FDF6EB] border-2 border-[#A1423F] rounded-full w-5 h-5"></div>
                      <hr className="border-[#E5BEBD] w-[40px] md:w-[90px] h-0.5"/>
                    </div>
                    <p className="font-semibold text-[24px] md:text-[32px] text-nowrap text-[#BE5C59] leading-[52px] transform translate-y-[-15px] bg-[#FDF6EB] w-[88px] sm:w-auto">
                      {year}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2 text-center flex items-center relative justify-end">
                  <div className="w-fit flex items-start relative translate-x-[10px] z-[2]">
                    <p className="font-semibold mr-2 w-[88px] translate-y-[-8px] sm:w-auto text-[32px] text-[#BE5C59] leading-[52px] bg-[#FDF6EB]">
                      {year}
                    </p>
                    <div className='flex items-center'>
                      <hr className="border-[#E5BEBD] w-[40px] md:w-[90px] h-0.5 "/>
                      <div className="right-[-20px] bg-[#FDF6EB] border-2 border-[#A1423F] rounded-full w-5 h-5"></div>
                    </div>
                  </div>
                </div>
                <div className={clsx("w-1/2 text-left pl-5 border-solid border-[#E5BEBD] transform -translate-x-[1px]", index < detail_stories.length - 1 && "border-l-2")}>
                  <p className="text-[#514F4f] font-normal leading-6 md:text-[16px] mb-20">
                    {content}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default BrandStory;