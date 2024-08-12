import React from "react";
import Image from "next/image";

type PronunciationProps = {
    title: string;
    image: string;
    view: string;
    time: string;
    link: string;
};

export const Pronunciation: React.FC<PronunciationProps> = ({ title, image, view, time, link }) => {
    return (
        <div id="pronunciation" className="relative p-3 bg-[#ffffff] border border-[#ffffff] rounded-lg shadow-lg overflow-hidden">
            <div className="relative w-full h-[200px] mb-2">
                <Image
                    src={image}
                    alt="image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                />
                <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-[#FFFFFF] text-[16px] leading-6 font-normal px-2 py-1 rounded">
                60:00
                </div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer" className="block text-[20px] leading-8 font-semibold text-[#000F30] mb-2">
                {title}
            </a>
            <div className="flex items-center gap-1 text-[16px] leading-6 font-normal text-[#514F4F]">
                <span>{view}</span>
                <span className="text-black">•</span>
                <span>{time}</span>
            </div>
        </div>
    );
};

export default function Library({ pronunciation }: { pronunciation: PronunciationProps[] }) {
    return (
        <section className="bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pronunciation.map((pronunciation, index) => (
                    <Pronunciation
                        key={index}
                        title={pronunciation.title}
                        image={pronunciation.image}
                        view={pronunciation.view}
                        time={pronunciation.time}
                        link={pronunciation.link}
                    />
                ))}
            </div>
        </section>
    );
}
