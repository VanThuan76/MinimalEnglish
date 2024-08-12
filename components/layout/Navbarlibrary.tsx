"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Writing } from "@/app/[locale]/(home)/library/_sections/Lesson/writing";
import { Speaking } from "@/app/[locale]/(home)/library/_sections/Lesson/speaking";
import { Listening } from "@/app/[locale]/(home)/library/_sections/Lesson/listening";
import { Reading } from "@/app/[locale]/(home)/library/_sections/Lesson/reading";
import { Vocabulary } from "@/app/[locale]/(home)/library/_sections/Lesson/vocabulary";
import { Paraphrases } from "@/app/[locale]/(home)/library/_sections/Lesson/paraphrases";
import { Selfstudy } from "@/app/[locale]/(home)/library/_sections/Lesson/selfstudy";
import { Pronunciation } from "@/app/[locale]/(home)/library/_sections/Lesson/pronunciation";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/library",
    label: "Writing",
  },
  {
    href: "/library/#speaking",
    label: "Speaking",
  },
  {
    href: "/library/#reading",
    label: "Reading",
  },
  {
    href: "/library/#listening",
    label: "Listening",
  },
  {
    href: "/library/#vocabulary",
    label: "Vocabulary",
  },
  {
    href: "/library/#pronunciation",
    label: "Pronunciation",
  },
  {
    href: "/library/#paraphrases",
    label: "Paraphrases",
  },
  {
    href: "/library/#selfstudy",
    label: "Self Study",
  },
];


export const Navbarlibrary = () => {
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
  
  const writings = [   
      {
          title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
          image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
          view: "102 lượt xem",
          time: "2 năm trước",  
          link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
      },
      {
          title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
          image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
          view: "102 lượt xem",
          time: "2 năm trước",
          link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
      },
      {
          title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
          image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
          view: "102 lượt xem",
          time: "2 năm trước",
          link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
      },
  ];
  const speaking = [   
    {
        title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
        image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
        view: "102 lượt xem",
        time: "2 năm trước",  
        link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
    },
    {
        title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
        image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
        view: "102 lượt xem",
        time: "2 năm trước",
        link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
    },
    {
        title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
        image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
        view: "102 lượt xem",
        time: "2 năm trước",
        link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
    },
];
const reading = [   
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",  
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
  },
  {
      title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
      image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
  },
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
  },
];
const listening = [   
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",  
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
  },
  {
      title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
      image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
  },
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
  },
];
const vocabulary = [   
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",  
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
  },
  {
      title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
      image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
  },
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
  },
];
const pronunciation = [   
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",  
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
  },
  {
      title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
      image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
  },
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
  },
];
const paraphrases = [   
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",  
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
  },
  {
      title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
      image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
  },
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
  },
];
const selfstudy = [   
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",  
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM"          
  },
  {
      title: "Bài 5. Write Task1 + 2: Học ở bậc gì, cũng KHÔNG thoát các ...",
      image: "/images/library/529fbadf9a788da26f816e8f785fa0c1.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=5kcOHNoW528&t=1s"
  },
  {
      title: "Bài 6. Write Task 2: Các loại trong một nốt nhạc",
      image: "/images/library/74bbca6266c0e208f4d14b8c2e35a53a.png",
      view: "102 lượt xem",
      time: "2 năm trước",
      link: "https://www.youtube.com/watch?v=fmSqFyb3ZKM" 
  },
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
       )}
        {activeTab === "/library/#speaking" && (
            <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {speaking.map((speaking, index) => (
                <Speaking
                  key={index}
                  title={speaking.title}
                  image={speaking.image}
                  view={speaking.view}
                  time={speaking.time}
                  link={speaking.link}
               />
             ))}
        </div>
      </section>
    )}
    {activeTab === "/library/#reading" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reading.map((reading, index) => (
              <Reading
                key={index}
                title={reading.title}
                image={reading.image}
                view={reading.view}
                time={reading.time}
                link={reading.link}
             />
           ))}
      </div>
    </section>
  )}
        {activeTab === "/library/#listening" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listening.map((listening, index) => (
              <Listening
                key={index}
                title={listening.title}
                image={listening.image}
                view={listening.view}
                time={listening.time}
                link={listening.link}
             />
           ))}
      </div>
    </section>
  )}
        {activeTab === "/library/#vocabulary" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabulary.map((vocabulary, index) => (
              <Vocabulary
                key={index}
                title={vocabulary.title}
                image={vocabulary.image}
                view={vocabulary.view}
                time={vocabulary.time}
                link={vocabulary.link}
             />
           ))}
      </div>
    </section>
  )}
        {activeTab === "/library/#pronunciation" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
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
  )}
        {activeTab === "/library/#paraphrases" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paraphrases.map((paraphrases, index) => (
              <Paraphrases
                key={index}
                title={paraphrases.title}
                image={paraphrases.image}
                view={paraphrases.view}
                time={paraphrases.time}
                link={paraphrases.link}
             />
           ))}
      </div>
    </section>
  )}
        {activeTab === "/library/#selfstudy" && (
          <section className="bg-[#FDF6EB] px-[16px] md:px-[0px] pt-3 md:pt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfstudy.map((selfstudy, index) => (
              <Selfstudy
                key={index}
                title={selfstudy.title}
                image={selfstudy.image}
                view={selfstudy.view}
                time={selfstudy.time}
                link={selfstudy.link}
             />
           ))}
      </div>
    </section>
  )}
      </div>
    </div>
  );
};
