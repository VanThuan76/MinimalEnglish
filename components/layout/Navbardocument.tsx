"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Document } from "@/app/[locale]/(home)/library/_sections/Document/document";
import { Examstest } from "@/app/[locale]/(home)/library/_sections/Document/examstest";
import { Examsyear } from "@/app/[locale]/(home)/library/_sections/Document/examsyear";
import { Skilldocument } from "@/app/[locale]/(home)/library/_sections/Document/skilldocument";
import { Usermanual } from "@/app/[locale]/(home)/library/_sections/Document/usermanual";


interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/library",
    label: "Đề tài liệu",
  },
  {
    href: "/library/#examstest",
    label: "Đề thi thử",
  },
  {
    href: "/library/#examsyear",
    label: "đề thi các năm",
  },
  {
    href: "/library/#skilldocument",
    label: "Tài liệu các kỹ năng",
  },
  {
    href: "/library/#usermanual",
    label: "hướng dẫn sử dụng",
  },  
];   

export const Navbardocument = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(routeList[0].href); 
  

  useEffect(() => {
    const currentRoute = routeList.find(route => pathname.includes(route.href.split("#")[1]));    
    if (currentRoute) {
      setActiveTab(currentRoute.href);
    } else {
      setActiveTab(routeList[0].href);
    }
  }, [pathname]);

  const handleTabClick = (href: string) => {
    setActiveTab(href);
    router.push(href); 
  }; 
  
  const document = [
    {
        title: "Đề luyện tập cho lớp Rễ",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Chuyên Speaking",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Mầm",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    }
];
const examstest = [
    {
        title: "Đề luyện tập cho lớp Rễ",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Chuyên Speaking",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Mầm",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    }
];
const examsyear = [
    {
        title: "Đề luyện tập cho lớp Rễ",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Chuyên Speaking",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Mầm",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    }
];
const skilldocument = [
    {
        title: "Đề luyện tập cho lớp Rễ",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Chuyên Speaking",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Mầm",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    }
];
const usermanual = [
    {
        title: "Đề luyện tập cho lớp Rễ",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Chuyên Speaking",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    },
    {
        title: "Đề luyện tập cho lớp Mầm",
        downloads: "100 lượt tải",
        time: "2 năm trước"
    }
]; 

  return (
    <div className="px-[16px] md:px-[0px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Bài giảng</h1>

      <div className="lg:flex block justify-between mb-5">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[743px]">
          {routeList.map(({ href, label }) => (
            <button
              key={href}
              onClick={() => handleTabClick(href)}
              className={clsx(
                "text-base text-left",
                activeTab === href ? "font-bold text-[#BE5C59]" : "text-[#514F4F] hover:underline"
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {/* mobile */}
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="hidden [@media(max-width:1000px)]:flex grid-col-5 w-full mb-4"
        >
          <CarouselContent>
            {routeList.map(({ href, label }) => (
              <button
                key={href}
                onClick={() => handleTabClick(href)}
                className={clsx(
                  "text-base text-[#000F30] flex-[0_0_auto] mx-2",
                  activeTab === href ? "font-bold text-[#BE5C59]" : "hover:underline"
                )}
              >
                {label}
              </button>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Separator className="flex bg-[#D0D5DD]" />
      
      {/* Nội dung của các tab */}
      <div className="tab-content mt-1 mx-[-10px]">
        {activeTab === "/library" && (
           <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {document.map((document, index) => (
               <Document
                  key={index}
                  title={document.title}                       
                  downloads={document.downloads}
                  time={document.time}
               />
             ))}
           </div>
         </section>
       )}
        {activeTab === "/library/#examstest" && (
            <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
    )}
    {activeTab === "/library/#examsyear" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {examsyear.map((examsyear, index) => (
              <Examsyear
                  key={index}
                  title={examsyear.title}                       
                  downloads={examsyear.downloads}
                  time={examsyear.time}
             />
           ))}
      </div>
    </section>
  )}
        {activeTab === "/library/#skilldocument" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skilldocument.map((skilldocument, index) => (
              <Skilldocument
                  key={index}
                  title={skilldocument.title}                       
                  downloads={skilldocument.downloads}
                  time={skilldocument.time}
             />
           ))}
      </div>
    </section>
  )}
        {activeTab === "/library/#usermanual" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {usermanual.map((usermanual, index) => (
              <Usermanual
                  key={index}
                  title={usermanual.title}                       
                  downloads={usermanual.downloads}
                  time={usermanual.time}
             />
           ))}
      </div>
    </section>
  )}        
      </div>
    </div>
  );
};