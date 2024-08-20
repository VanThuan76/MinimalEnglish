import MailIcon from "@/components/icons/document-download-icon";
import React from "react";


type DocumentItemProps = {
    title: string;
    downloaded: string;   
    created_at: string;    
};

const DocumentItem: React.FC<DocumentItemProps> = ({ title, downloaded, created_at }) => {
    return (
        <div className="relative p-3 bg-[#FFFFFF] border border-[#E4E7EC] rounded-lg shadow-lg overflow-hidden ">
            <div className="relative w-full h-[200px] mb-5 bg-[#E4E7EC] rounded-lg shadow-lg overflow-hidden"></div>
            <a className="md:w-[372px] w-full text-[20px] leading-8 font-semibold text-[#000F30]">{title}</a>
            <div className="flex items-center gap-1 mt-3 space-x-2">
                <MailIcon />
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{downloaded} lượt tải</span>
                <span className="text-black">•</span>
                <span className="text-[16px] leading-6 font-normal text-[#514F4F]">{created_at} </span>
            </div>
            <button className="w-full h-[64px] text-[#ffffff] text-[20px] bg-[#BE5C59] rounded-lg font-semibold leading-8 border-none mt-4">Tải về</button>
        </div>
    );
};

export default DocumentItem;
