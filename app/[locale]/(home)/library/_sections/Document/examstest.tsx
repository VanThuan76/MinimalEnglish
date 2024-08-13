import React from "react";

type ExamstestProps = {
    title: string;
    downloads: string;   
    time: string;    
};

export const Examstest: React.FC<ExamstestProps> = ({ title, downloads, time }) => {
    return (
        <div id="examstest" className="relative p-3 bg-[#FFFFFF] border border-[#E4E7EC] rounded-lg shadow-lg overflow-hidden ">
            <div className="relative w-full h-[200px] mb-5 bg-[#E4E7EC] rounded-lg shadow-lg overflow-hidden">                                 
            </div>
            <a className="md:w-[372px] w-full text-[20px] leading-8 font-semibold text-[#000F30]">{title}</a>
            <div className="flex items-center gap-1 mt-3 space-x-2">
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{downloads}</span>
                <span className="text-black">•</span>
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{time}</span>
            </div>
            <button className="w-full h-[64px] text-[#ffffff] text-[20px] bg-[#BE5C59] rounded-lg font-semibold leading-8 border-none mt-4">Tải về</button>
        </div>
       
    );
};

export default function Library({ examstest }: { examstest: ExamstestProps[] }) {
    return (
        <section className="bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FDF6EB]">
                {examstest.map((examstest, index) => (
                    <Examstest
                        key={index}
                        title={examstest.title}                       
                        downloads={examstest.downloads}
                        time={examstest.time}                        
                    />
                ))}
            </div>
        </section>
    );
}
