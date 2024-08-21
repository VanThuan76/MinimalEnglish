import React from "react";
import Image from "next/image";

type LessonItemProps = {
    title: string;
    image: string;
    view: string;
    time: string;
    link: string;
};

export const LessonItem: React.FC<LessonItemProps> = ({ title, image, view, time, link }) => {
    return (
        <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block p-3 bg-[#ffffff] border border-[#ffffff] rounded-lg shadow-lg overflow-hidden"
        >
            <div className="relative w-full h-[200px] mb-2">
                <Image
                    src={`/${image}`}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-[#FFFFFF] text-[16px] leading-6 font-normal px-2 py-1 rounded">
                    10:00
                </div>
            </div>
            <h2 className="text-[20px] leading-8 font-semibold text-[#000F30] mb-2">
                {title}
            </h2>
            <div className="flex items-center gap-1 text-[16px] leading-6 font-normal text-[#514F4F]">
                <span className="text-left mr-1.5">{view} lượt xem</span>
                <span className="text-black">•</span>
                <span className="text-left ml-1.5">{time}</span>
            </div>
        </a>
    );
};

export default LessonItem;
