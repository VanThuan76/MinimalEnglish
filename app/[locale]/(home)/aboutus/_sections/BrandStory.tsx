import React from 'react';
import { Brand_story } from '@/app/[locale]/type';

export const BrandStory: React.FC<Brand_story> = ({ label, description, detail_stories }) => {
  return (
    <div className="px-[106px] py-[40px] gap-20 font-sans bg-white">
      <h1 className="gap-6 text-center mb-5 font-[600] text-[#BE5C59] text-[48px] md:font-bold">
        {label}
      </h1>
      <p className="text-[#514F4f] text-[18px] mb-10 text-center">
        {description}
      </p>
      <div className="relative grid lg:grid-cols-2 gap-10">
        <div className="absolute inset-y-0 left-1/2 w-0.5 h-2/3 bg-[#BE5C59] transform -translate-x-1/2"></div>
        <div className="relative">
          {detail_stories.map(({ year, content }, index) => (
            <div key={index} className="relative mb-20">
              {index % 2 === 0 ? (
                <p className="text-[#514F4f] text-[18px] text-left right-2 w-7/8 h-[180px] gap-0">{content}</p>
              ) : (
                <>
                  <p className="font-[400] text-[#BE5C59] text-[30px] md:font-bold leading-[0px] text-center h-[180px] gap-0">{year}                    
                  </p>                  
                  <div className="absolute top-0 right-[-35px] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#BE5C59] rounded-full"></div>                 
                  <div className="absolute top-0 right-[-12px] w-1/3 h-0.5 bg-[#BE5C59] transform -translate-y-1/2"></div>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="relative">
          {detail_stories.map(({ year, content }, index) => (
            <div key={index} className="relative mb-20">
              {index % 2 === 1 ? (
                <p className="text-[#514F4f] text-[18px] text-left w-7/8 h-[180px] gap-0">{content}</p>
              ) : (
                <>
                  <p className="font-[400] text-[#BE5C59] text-[30px] md:font-bold mb-[10px] leading-[0px] text-center h-[180px] gap-0">
                  {year}
                  </p>                  
                  <div className="absolute top-0 left-[-20px] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#BE5C59] rounded-full"></div>                  
                  <div className="absolute top-0 left-[-13px] w-1/3 h-0.5 bg-[#BE5C59] transform -translate-y-1/2"></div>
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
