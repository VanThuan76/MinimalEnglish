"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "@/navigation";
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
import { useGetNavbarLibrary } from "@/schema/services/Library/navbarlibrary";
import { useGetWritingData } from "@/schema/services/Library/Letures/writing";
import { useGetListeningData } from "@/schema/services/Library/Letures/listening";
import { useGetReadingData } from "@/schema/services/Library/Letures/reading";
import { useGetSpeakingData } from "@/schema/services/Library/Letures/speaking";
import { useGetVocabularyData } from "@/schema/services/Library/Letures/vocabulary";
import { useGetPronunciationData } from "@/schema/services/Library/Letures/pronunciation";
import { useGetParaphraseData } from "@/schema/services/Library/Letures/paraphrase";
import { useGetSelfstudyData } from "@/schema/services/Library/Letures/selfstudy";

export const NavbarLibrary = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: sections = [], isLoading } = useGetNavbarLibrary();
  const { data: writingData = [], isLoading: writingLoading } = useGetWritingData();
  const { data: speakingData = [], isLoading: speakingLoading } = useGetSpeakingData();
  const { data: readingData = [], isLoading: readingLoading } = useGetReadingData();
  const { data: listeningData = [], isLoading: listeningLoading } = useGetListeningData();
  const { data: vocabularyData = [], isLoading: vocabularyLoading } = useGetVocabularyData();
  const { data: pronunciationData = [], isLoading: pronunciationLoading } = useGetPronunciationData();
  const { data: paraphraseData = [], isLoading: paraphraseLoading } = useGetParaphraseData();
  const { data: selfstudyData = [], isLoading: selfstudyLoading } = useGetSelfstudyData();

  const [activeTab, setActiveTab] = useState<string>(pathname);

  useEffect(() => {
    const currentRoute = sections.find(section => pathname.includes(section.name.toLowerCase().replace(" ", "-")));
    if (currentRoute) {
      setActiveTab(`/library/#${currentRoute.name.toLowerCase().replace(" ", "-")}`);
    } else {
      setActiveTab("/library");
    }
  }, [pathname, sections]);

  const handleTabClick = (href: string) => {
    setActiveTab(href);
    router.prefetch(href);
  };

  if (isLoading || writingLoading || speakingLoading || readingLoading || listeningLoading || vocabularyLoading || pronunciationLoading || paraphraseLoading || selfstudyLoading)  return <div>Loading...</div>; 

  const renderSectionContent = (sectionName: string) => {  
    console.log(sectionName);  
    switch (sectionName) {
   
      case "writing":         
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writingData.map((item: any) => (
              <Writing
                key={item.id}
                title={item.title}
                image={`/${item.image}`} // Hoặc URL mặc định
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );
      case "speaking":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {speakingData.map((item: any) => (
              <Speaking
                key={item.id}
                title={item.title}
                image={`/${item.image}`} // Hoặc URL mặc định
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );
        case "reading":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {readingData.map((item: any) => (
              <Reading
                key={item.id}
                title={item.title}
                image={`/${item.image}`} 
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );
        case "listening":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {listeningData.map((item: any) => (
              <Listening
                key={item.id}
                title={item.title}
                image={`/${item.image}`} 
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );
        case "vocabulary":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vocabularyData.map((item: any) => (
              <Vocabulary
                key={item.id}
                title={item.title}
                image={`/${item.image}`} // Hoặc URL mặc định
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );
        case "pronunciation":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pronunciationData.map((item: any) => (
              <Pronunciation
                key={item.id}
                title={item.title}
                image={`/${item.image}`} // Hoặc URL mặc định
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );
        case "paraphrase":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paraphraseData.map((item: any) => (
              <Paraphrases
                key={item.id}
                title={item.title}
                image={`/${item.image}`} // Hoặc URL mặc định
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );
        
        case "self-study":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selfstudyData.map((item: any) => (
              <Selfstudy
                key={item.id}
                title={item.title}
                image={`/${item.image}`}
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()}
                link="#"
              />
            ))}
          </div>
        );      
    }
  };

  return (
    <div className="px-[16px] md:px-[0px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Bài giảng</h1>

      <div className="lg:flex block justify-between mb-5">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[743px]">
          {sections.map(({ name }) => (
            <button
              key={name}
              onClick={() => handleTabClick(`/library/#${name.toLowerCase().replace(" ", "-")}`)}
              className={clsx(
                "text-base text-left",
                activeTab === `/library/#${name.toLowerCase().replace(" ", "-")}` ? "font-bold text-[#BE5C59]" : "text-[#514F4F] hover:underline"
              )}
            >
              {name}
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
            {sections.map(({ name }) => (
              <button
                key={name}
                onClick={() => handleTabClick(`/library/#${name.toLowerCase().replace(" ", "-")}`)}
                className={clsx(
                  "text-base text-[#000F30] flex-[0_0_auto] mx-2",
                  activeTab === `/library/#${name.toLowerCase().replace(" ", "-")}` ? "font-bold text-[#BE5C59]" : "hover:underline"
                )}
              >
                {name}
              </button>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Separator className="flex bg-[#D0D5DD]" />
      
      {/* Nội dung của các tab */}
      <div className="tab-content mt-1 mx-[-10px]">
        {renderSectionContent(activeTab.replace("/library/#", ""))}
      </div>
    </div>
  );
};
