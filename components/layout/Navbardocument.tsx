"use client";

import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import clsx from "clsx";
import { useRouter } from "@/navigation"; 
import { useGetNavbarDocument } from "@/schema/services/Library/navbarDocument";
import { useTranslations } from "next-intl";

export const Navbardocument = () => {
  const {data: document, isLoading} = useGetNavbarDocument();
  const {state, setState} = useGlobalState();
  const router = useRouter();
  const t = useTranslations();
  
  if(isLoading) return <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]"></div>;

  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Tài liệu</h1>
      <div className="lg:flex block justify-between mb-5">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[760px]">                    
          {document.map((item: any) => (
            <Link 
              href="/library"
              onClick={() => {
                setState({...state, value: item.order});
              }}
              key={item.order}
              className={state.value === item.order ? "text-sm px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#514F4F] hover:underline"}>
              {item.name}
            </Link>
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
            {document.map((item: any) => (
              <Link
                href="/library"
                onClick={() => {
                  setState({...state, value: item.order});
                }}
                key={item.value} 
                className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2", state.value === item.order ? "font-bold text-[#BE5C59]" : "hover:underline")}
              >
                {item.name}
              </Link>
            ))}
          </CarouselContent>
        </Carousel>          
      </div>
      <Separator className="flex bg-[#D0D5DD] mt-5"/>
    </div>
  );
};