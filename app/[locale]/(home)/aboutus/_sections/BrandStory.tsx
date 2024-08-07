// import React from 'react';
// import { Brand_story } from '@/app/[locale]/type';

// export const BrandStory: React.FC<Brand_story> = ({ label, description, detail_stories }) => {
//   return (
//     <div className="px-[106px] py-[40px] gap-20 font-sans bg-white">
//       <h1 className="gap-6 text-center mb-5 font-[600] text-[#BE5C59] text-[48px] md:font-bold">
//         {label}
//       </h1>
//       <p className="text-[#514F4f] text-[18px] mb-10 text-center">
//         {description}
//       </p>
//       <div className="relative grid lg:grid-cols-2 gap-10">
//         <div className="absolute inset-y-0 left-1/2 w-0.5 h-3/4 bg-[#BE5C59] transform -translate-x-1/2"></div>
//         <div className="relative">
//           {detail_stories.map(({ year, content }, index) => (
//             <div key={index} className="relative mb-20">
//               {index % 2 === 0 ? (
//                 <p className="text-[#514F4f] text-[18px] text-left right-2 w-7/8 h-[180px] gap-0">{content}</p>
//               ) : (
//                 <>
//                   <p className="font-[400] text-[#BE5C59] text-[30px] md:font-bold leading-[0px] text-center h-[180px] gap-0">{year}                    
//                   </p>                  
//                   <div className="absolute top-0 right-[-35px] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#BE5C59] rounded-full"></div>                 
//                   <div className="absolute top-0 right-[-12px] w-1/3 h-0.5 bg-[#BE5C59] transform -translate-y-1/2"></div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//         <div className="relative">
//           {detail_stories.map(({ year, content }, index) => (
//             <div key={index} className="relative mb-20">
//               {index % 2 === 1 ? (
//                 <p className="text-[#514F4f] text-[18px] text-left w-7/8 h-[180px] gap-0">{content}</p>
//               ) : (
//                 <>
//                   <p className="font-[400] text-[#BE5C59] text-[30px] md:font-bold mb-[10px] leading-[0px] text-center h-[180px] gap-0">
//                   {year}
//                   </p>                  
//                   <div className="absolute top-0 left-[-20px] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#BE5C59] rounded-full"></div>                  
//                   <div className="absolute top-0 left-[-13px] w-1/3 h-0.5 bg-[#BE5C59] transform -translate-y-1/2"></div>
//                 </>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrandStory;


import React from 'react';
import { Brand_story } from '@/app/[locale]/type';

export const BrandStory: React.FC<Brand_story> = ({ label, description, detail_stories }) => {
  return (
    <div className="px-4 py-10 font-sans bg-[#FDF6EB] md:px-[106px] md:py-[40px]">
      <h1 className="text-center leading-[76px] mb-0 font-bold text-[#BE5C59] text-3xl md:text-[48px] md:font-bold">
        {label}
      </h1>
      <p className="text-[#514F4f] text-[20px] leading-8 font-normal p-3 text-center md:text-[20px] mb-10">
        {description}
      </p>
      <div className="relative">
        <div className="absolute left-1/2 w-0.5 h-5/6 border-r-2 border-[#E5BEBD]"></div>
        {detail_stories.map(({ year, content }, index) => (
          <div key={index} className="flex items-start mb-20 relative">
            {index % 2 === 0 ? (
              <>
                <div className="w-1/2 text-left pr-5 relative">
                  <p className="text-[#514F4f] font-normal leading-6 md:text-[16px]">
                    {content}
                  </p>
                </div>
                <div className="w-1/2 text-center flex items-center relative justify-start">
                  <div className="w-fit flex justify-start items-center relative -translate-x-[10px]">
                    <div className="right-[-20px] bg-[#FDF6EB] border-2 border-[#A1423F] transform translate-y-[-20px] rounded-full w-5 h-5"></div>
                    <hr className="border-[#E5BEBD] w-[40px] md:w-[90px] h-0.5 transform translate-y-[-20px]" />
                    <p className="font-semibold text-[32px] text-[#BE5C59] leading-[52px] transform translate-y-[-10px] bg-[#FDF6EB] px-2">
                      {year}
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-1/2 text-center flex items-center relative justify-end">
                  <div className="w-fit flex justify-start items-center relative translate-x-[10px]">
                    <p className="font-semibold mr-2 w-[88px] sm:w-auto text-[32px] text-[#BE5C59] transform translate-y-[-10px] leading-[52px] bg-[#FDF6EB]">
                      {year}
                    </p>
                    <hr className="border-[#E5BEBD] w-[40px] md:w-[90px] h-0.5 transform translate-y-[-20px]" />
                    <div className="right-[-20px] bg-[#FDF6EB] border-2 border-[#A1423F] rounded-full w-5 h-5 transform translate-y-[-20px] "></div>
                  </div>
                </div>
                <div className="w-1/2 text-left pl-5">
                  <p className="text-[#514F4f] font-normal leading-6 md:text-[16px]">
                    {content}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandStory;