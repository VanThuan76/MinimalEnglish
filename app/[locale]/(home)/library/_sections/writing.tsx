import React from "react";
import Image from "next/image";

type WritingProps = {
    title: string;
    image: string;
    view: string;
    time: string;
    link: string;
};

export const Writing: React.FC<WritingProps> = ({ title, image, view, time, link }) => {
    return (
        <div className="relative p-3 border-[#ffffff]">
            <div className="w-full md:w-[372px] h-[200px] relative mb-2 mt-[-20px] flex-shrink-0 gap-[24px]">
                <Image
                    src={image}                 
                    style={{ objectFit: "cover", borderRadius: "10px" }}
                    alt="image" 
                    fill                  
                />               
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-[#FFFFFF] text-[16px] leading-6 font-normal px-2 py-1 rounded">
                    10:00
                </div>
            </div>
            <a href={link} target="_blank" className="md:w-[372px] w-full text-[20px] leading-8 font-semibold text-[#000F30]">{title}</a>
            <div className="flex items-center gap-1 mt-3 space-x-2 ">
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{view}</span>
                <span className="text-black">•</span>
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{time}</span>
            </div>
        </div>
    );
};

export default function Library({ writings }: { writings: WritingProps[] }) {
    return (
        <section className="bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FDF6EB]">
                {writings.map((writing, index) => (
                    <Writing
                        key={index}
                        title={writing.title}
                        image={writing.image}
                        view={writing.view}
                        time={writing.time}
                        link={writing.link}
                    />
                ))}
            </div>
        </section>
    );
}
