"use client";
import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useState } from "react";

interface RouteProps {
  href: string,
  tab: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/new&blog",
    tab: "all",
    label: "Tất cả",
  },
  {
    href: "/new&blog",
    tab: "tips",
    label: "Mẹo học tập",
  },
  {
    href: "/new&blog",
    tab: "ielts news",
    label: "IELTS News",
  },
  {
    href: "/new&blog",
    tab: "minimal english news",
    label: "Minimal English có gì mới",
  },
  {
    href: "/new&blog",
    tab: "FAQ",
    label: "FAQ (Câu hỏi thường gặp)",
  },
];

export const TabsBar = () => {
  const [value, setValue] = useState("")
  const {state, setState} = useGlobalState()
  
  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#ffffff]">
        <div className="lg:flex block justify-between mb-5">
          {/* desktop */}
          <div className="hidden lg:flex flex-row justify-between items-center w-[743px]">
            {routeList.map(({href, tab, label }) => (
              <Link 
                href={href}
                onClick={() => {
                  setState({value: tab})
                }}
                key={tab}
                className={state.value === tab ? "text-base px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#514F4F] hover:underline"}>
                {label}
              </Link>
            ))}
          </div>

          {/* mobile */}
          <Carousel
            opts={{
              align: "start",
              dragFree: true
            }}
            className="hidden [@media(max-width:1000px)]:flex grid-col-5 w-full mb-4"
          >
            <CarouselContent>
              {routeList.map(({href, tab, label }) => (
                <Link
                  href={href} 
                  onClick={() => {
                    setState({value: tab})
                  }}
                  key={tab} 
                  className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2", state.value === tab ? "font-bold text-[#BE5C59]" : "hover:underline"
                )}>
                  {label}
                </Link>
              ))}
            </CarouselContent>
          </Carousel>
          <form
            onSubmit={(e) => {
              e.preventDefault()
            }}
            className="bg-white flex border-solid border-[#D0D5DD] border-[1px] p-2 rounded-xl w-full lg:w-[300px]"
          >
            <input 
              placeholder="Tìm kiếm"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
              }}
              className="bg-white outline-none w-full text-[#000F30] text-base"
            />
            <button>
              <Search color="#000F30" strokeWidth={1.5}/>
            </button>
          </form>
          
        </div>
      <Separator className="flex bg-[#D0D5DD]"/>
    </div>
  );
};
