import React from 'react';
import { ClassData } from '@/app/[locale]/type';


// export const ClassDetail: React.FC<any> = ({class_detail: Class_Detail}) => {
  export const ClassDetail: React.FC<ClassData> = ({ data_detail}) => {

    return (
      <div className="px-4 py-10 font-sans text-black md:px-[106px] md:py-[40px]">
        <div className="text-container" dangerouslySetInnerHTML={{ __html: data_detail?.content || '' }} />
      </div>
    );
  };

export default ClassDetail;
