"use client";

import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import clsx from "clsx";
import { useRouter } from "@/navigation";
import { useGetNavbarLesson } from "@/schema/services/Library/navbarLesson";
import { useTranslations } from "next-intl";

export const NavbarLesson = () => {
  const { data: lesson, isLoading } = useGetNavbarLesson();
  const { state, setState } = useGlobalState();
  const router = useRouter();
  const t = useTranslations();

  if (isLoading) return <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]"></div>;

  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Bài Giảng</h1> 
      <div className="lg:flex justify-between mb-5">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[1000px]">
          {lesson.map((item: any, index: number) => (
            <div key={item.order} className={index === 0 ? "flex-1 text-left" : "flex-1 mx-4 text-center"}>
              <Link
                href="/library"
                onClick={() => {
                  setState({ ...state, value: item?.order });
                }}
                className={state.value === item?.order ? "text-sm px-2 font-bold text-[#BE5C59]" : "text-center px-2 text-[#514F4F] hover:underline"}
              >
                {item.name}
              </Link>             
            </div>
          ))}
        </div>

        {/* mobile */}
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="hidden [@media(max-width:1000px)]:flex w-full mb-4"
        >
          <CarouselContent>
            {lesson.map((item: any) => (
              <div key={item.order} className="flex-[0_0_auto] mx-1.5"> {/* Adjusted margin here */}
                <Link
                  href="/library"
                  onClick={() => {
                    setState({ ...state, value: item.order });
                  }}
                  className={clsx("text-base text-[#000F30]", state.value === item.order ? "font-bold text-[#BE5C59]" : "hover:underline")}
                >
                  {item.name}
                </Link>
                {/* Add horizontal line below name */}
              </div>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Separator className="flex bg-[#D0D5DD] mt-5" />
    </div>
  );
};
