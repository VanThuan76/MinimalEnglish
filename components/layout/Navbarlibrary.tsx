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
import { useGetNavbarLibrary } from "@/schema/services/Library/navbarlibrary";
import { useGetWritingData } from "@/schema/services/Library/writing"; // Import hook mới

export const NavbarLibrary = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { data: sections = [], isLoading, error } = useGetNavbarLibrary();
  const { data: writingData = [], isLoading: writingLoading, error: writingError } = useGetWritingData(); // Fetch writing data
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

  if (isLoading || writingLoading) return <div>Loading...</div>;
  if (error || writingError) return <div>Error loading data</div>;

  console.log('Writingdata:', writingData)

  const renderSectionContent = (sectionName: string) => {
    switch (sectionName) {
      case "Writing":
        if (writingLoading) return <div>Loading Writing...</div>;
      if (writingError) return <div>Error loading Writing data</div>;

      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="text-center mb-4">
            <span>Data Length: {writingData.length}</span> {/* Hiển thị độ dài dữ liệu */}
          </div>
          {writingData.length > 0 ? (
            writingData.map((item: any) => (
              <Writing
                key={item.id}
                title={item.title}
                image={item.image || `default-image.png`} // Hoặc URL mặc định
                view={`${item.viewer} lượt xem`}
                time={new Date(item.created_at).toLocaleDateString()} // Hoặc định dạng khác
                link="#"
              />
            ))
          ) : (
            <div>No Writing data available</div>
          )}
        </div>
        );
      case "Speaking":
        // Tương tự như trên, nhưng với dữ liệu cho Speaking
        return <div>Content for Speaking</div>;
      // Add cases for other sections similarly
      default:
        return null;
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
