"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Excercises } from "@/app/[locale]/(home)/library/_sections/Document/exercises";
import { Practivetest } from "@/app/[locale]/(home)/library/_sections/Document/practivetest";
import { Topicfive } from "@/app/[locale]/(home)/library/_sections/Document/topicfive";
import { Documentationofskills } from "@/app/[locale]/(home)/library/_sections/Document/documentationofskills";
import { Instructionsforuse } from "@/app/[locale]/(home)/library/_sections/Document/instructionsforuse";
import { useGetNavbarDocument } from "@/schema/services/Library/navbarDocument";
import { useGetExcercisesData } from "@/schema/services/Library/Document/excercises";
import { useGetPractivetestData } from "@/schema/services/Library/Document/practicetest";
import { useGetTopicfiveData } from "@/schema/services/Library/Document/topicfive";
import { useGetInstructionsforuseData } from "@/schema/services/Library/Document/instructionsforuse";
import { useGetDocumentationofskillsData } from "@/schema/services/Library/Document/documentationofskill";



export const Navbardocument = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: sections = [], isLoading, error } = useGetNavbarDocument();
  const { data: excercisesData = [], isLoading: Loading0 } = useGetExcercisesData();
  const { data: practivetestData = [], isLoading: Loading1 } = useGetPractivetestData();
  const { data: topicfiveData = [], isLoading: Loading2 } = useGetTopicfiveData();
  const { data: documentationofskillsData = [], isLoading: Loading3 } = useGetDocumentationofskillsData();
  const { data: instructionsforuseData = [], isLoading: Loading4 } = useGetInstructionsforuseData();

  const [activeTab, setActiveTab] = useState<string>(pathname);

  useEffect(() => {
    const currentRoute = sections.find(section => pathname.includes(section.name.toLowerCase().replace(" ", "-")));
    if (currentRoute) {
      setActiveTab(`/library/#${currentRoute.name.toLowerCase().replace(" ", "-")}`);
    } else {
      setActiveTab("/library/#đề-luyện tập");
    }
  }, [pathname, sections]);

  const handleTabClick = (href: string) => {
    setActiveTab(href);
    router.prefetch(href);
  };

  if (isLoading || Loading0 || Loading1 || Loading2 || Loading3 || Loading4 ) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const renderSectionContent = (sectionName: string) => {
    console.log(sectionName);
    switch (sectionName) {
      case "đề-luyện tập":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {excercisesData.map((item: any) => (
              <Excercises
                key={item.id}
                title={item.title}
                downloads={`${item.downloaded} lượt tải`}               
                time={new Date(item.created_at).toLocaleDateString()}              
              />
            ))}
          </div>
        );
        case "đề-thi thử":
          return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {practivetestData.map((item: any) => (
                <Practivetest
                  key={item.id}
                  title={item.title}
                  downloads={`${item.downloaded} lượt tải`}               
                  time={new Date(item.created_at).toLocaleDateString()}              
                />
              ))}
            </div>
          );
          case "đề-các năm":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {topicfiveData.map((item: any) => (
              <Topicfive
                key={item.id}
                title={item.title}
                downloads={`${item.downloaded} lượt tải`}               
                time={new Date(item.created_at).toLocaleDateString()}              
              />
            ))}
          </div>
        );
        case "tài-liệu các kỹ năng":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {documentationofskillsData.map((item: any) => (
              <Documentationofskills
                key={item.id}
                title={item.title}
                downloads={`${item.downloaded} lượt tải`}               
                time={new Date(item.created_at).toLocaleDateString()}              
              />
            ))}
          </div>
        );
        case "hướng-dẫn sử dụng":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {instructionsforuseData.map((item: any) => (
              <Instructionsforuse
                key={item.id}
                title={item.title}
                downloads={`${item.downloaded} lượt tải`}               
                time={new Date(item.created_at).toLocaleDateString()}              
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="px-[16px] md:px-[0px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Tài liệu</h1>

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
