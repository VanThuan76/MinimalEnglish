import LectureIcon from '@/components/icons/lecture-icon';
import TeachMethodIcon from '@/components/icons/teach-method-icon';
import StarBlingIcon from '@/components/icons/star-bling-icon';
import React from 'react';
import { useGetHighlight } from "@/schema/services/Aboutus/highlight";
import { useGetLecture_HL } from '@/schema/services/Aboutus/HLlecuture';
import { useGetTeachermethod_HL } from '@/schema/services/Aboutus/HLTeachermethod';

export const Highlight = () => {
  const { data: infor_highlight, isLoading: Loading1 } = useGetHighlight();
  const { data: lectures_hl,  isLoading: Loading2 } = useGetLecture_HL();
  const { data: teachermethod_hl,  isLoading: Loading3 } = useGetTeachermethod_HL();

  if (Loading1||Loading2||Loading3) return <div>Loading ....</div>;

  const filterLetures = lectures_hl.filter((item: any)=> item.title === 'Leture' || item.title === 'Giảng viên' ) || [];
  const filteredTeachermethods = teachermethod_hl.filter((item: any) => item.title === 'teaching methods' || item.title === 'Phương pháp giảng dạy' ) || [];

  // Kiểm tra dữ liệu
  console.log('Lectures HL:', lectures_hl);
  console.log('Teachermethod HL:', teachermethod_hl);

  return (
    <div className="px-6 py-10 bg-[#FFFFFF] sm:px-[32px] lg:px-[80px] lg:py-[40px;80px]">
      <h1 className="text-center mb-5 leading-[76px] font-[700] text-[#BE5C59] text-[48px] sm:text-[48px] md:font-bold">
        {infor_highlight?.name}
      </h1>
      <p className="text-[#514F4F] text-[20px] leading-8 p-3 font-normal sm:text-[20px] list-disc mb-10 text-center">
        {infor_highlight?.vi_description}
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-11">
        {/* Section for Lectures */}
        <div className="flex flex-col items-start mb-10" style={{ borderTop: '1px solid #C1C5BF', paddingTop: '50px' }}>
          <div className="mb-5">
            <LectureIcon />
          </div>
          <div className="font-[600] text-[#000F30] p-3 leading-[52px] text-[32px] sm:text-[32px] md:font-bold mb-[10px]">            
            {lectures_hl[0].title}
          </div>
          <ul className="text-[20px] sm:text-[20px] leading-8 font-normal p-3 text-[#282B27] flex flex-col space-y-4"> 
                {filterLetures.map((item: any) =>(            
                <li key={item.id} className="flex items-start space-x-3">
                  <StarBlingIcon className="w-[24px] h-[24px] flex-shrink-0" />
                  <span className="flex-1" dangerouslySetInnerHTML={{ __html: item.content }} />
                </li>
                ))}              
          </ul>
        </div>

        {/* Section for Teaching Methods */}
        <div className="flex flex-col items-start mb-10" style={{ borderTop: '1px solid #C1C5BF', paddingTop: '50px' }}>       
          <div className="mb-5">
            <TeachMethodIcon />
          </div>
          <div className="font-[600] text-[#000F30] p-3 leading-[52px] text-[32px] sm:text-[32px] md:font-bold mb-[10px]">                            
            {teachermethod_hl[2].title}              
          </div>      
          <ul className="text-[20px] sm:text-[20px] leading-8 font-normal p-3 text-[#282B27] flex flex-col space-y-4">
                {filteredTeachermethods.map((item: any) =>(                          
                <li key={item.id} className="flex items-start space-x-3">
                  <StarBlingIcon className="w-[24px] h-[24px] flex-shrink-0" />
                  <span className="flex-1" dangerouslySetInnerHTML={{ __html: item.content }} />
                </li>
              ))}
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
