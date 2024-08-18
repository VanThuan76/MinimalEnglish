"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { usePathname, useRouter } from "@/navigation";
import clsx from "clsx";
import { useState, useEffect } from "react";
import { Document } from "@/app/[locale]/(home)/library/_sections/Document/document";
import { Examstest } from "@/app/[locale]/(home)/library/_sections/Document/examstest";
import { Examsyear } from "@/app/[locale]/(home)/library/_sections/Document/examsyear";
import { Skilldocument } from "@/app/[locale]/(home)/library/_sections/Document/skilldocument";
import { Usermanual } from "@/app/[locale]/(home)/library/_sections/Document/usermanual";
import { useGetNavbarDocument } from "@/schema/services/Library/navbarDocument";

export const Navbardocument = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: sections = [], isLoading, error } = useGetNavbarDocument();
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

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  const renderSectionContent = (sectionName: string) => {
    switch (sectionName) {
      case "Document":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.filter(section => section.name === "Document").map((item, index) => (
              <Document
                key={index}
                title={item.name}
                downloads={`item.description`}                
                time="2 năm trước"                
              />
            ))}
          </div>
        );
      case "Examstest":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.filter(section => section.name === "Examstest").map((item, index) => (
              <Examstest
                key={index}
                title={item.name}
                downloads={`item.description`}               
                time="2 năm trước"               
              />
            ))}
          </div>
        );
      case "Examsyear":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.filter(section => section.name === "Examsyear").map((item, index) => (
              <Examsyear
                key={index}
                title={item.name}
                downloads={`item.description`}                
                time="2 năm trước"               
              />
            ))}
          </div>
        );
      case "Skilldocument":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.filter(section => section.name === "Skilldocument").map((item, index) => (
              <Skilldocument
                key={index}
                title={item.name}
                downloads={`item.description`}               
                time="2 năm trước"                
              />
            ))}
          </div>
        );
      case "Usermanual":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.filter(section => section.name === "Usermanual").map((item, index) => (
              <Usermanual
                key={index}
                title={item.name}
                downloads={`item.description`}
                
                time="2 năm trước"
                
              />
            ))}
          </div>
        );
      default:
        return null;
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
