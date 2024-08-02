import React from 'react';
import { Brand_story } from '@/app/[locale]/type';

export const BrandStory = ({label, description, detail_stories}: Brand_story ) => {
  return (
    <div className="px-[106px] py-[40px;80px] gap-20 font-sans bg-white">
      <h1 className="gap-6 text-center mb-5 font-[600] text-[#BE5C59] text-[48px] md:font-bold">
        { label }
      </h1>
      <p className="text-[#514F4f] text-[18px] list-disc mb-10 text-center">
      { description }
      </p>
      
      <div className="grid lg:grid-cols-2 place-items-center gap-11">
   
          <div className="">
       
          {/*  <p className="t-[17px] gap-[10px] text-[#514F4f] text-[18px] "> */}
           {detail_stories.map(({year, content}, index) => ( 
            <div key={index} >
              {index % 2 === 0 ? (
              <p className="text-[#514F4f] text-[18px] flex flex-row">
             {content}
             </p>  
              ) :
              (
              <p className="font-[400] text-[#BE5C59] text-[30px] md:font-bold mb-[10px] leading-[52px] text-right">{year}</p>
              )}
              </div>
              ))
            }
          
           
      </div>     
      <div className="">
       
          
           {detail_stories.map(({year, content}, index) => ( 
            <div key={index} >
              {index % 2 > 0 ? (
              <p className="text-[#514F4f] text-[18px] flex flex-row">
             {content}
             </p>  
              ) :
              (
              <p className="font-[400] text-[#BE5C59] text-[30px] md:font-bold mb-[10px] leading-[52px] flex flex-row text-left">{year}</p>
              )}
              </div>
              ))
            }
            
           
      </div>    
      </div>
    </div>
  );
};

export default BrandStory;
