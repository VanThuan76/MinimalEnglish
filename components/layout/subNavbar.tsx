"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/navigation";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useState } from "react";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/new&blog",
    label: "Tất cả",
  },
  {
    href: "/new&blog/tips",
    label: "Mẹo học tập",
  },
  {
    href: "/new&blog/ielts news",
    label: "IELTS News",
  },
  {
    href: "/new&blog/minimal english news",
    label: "Minimal English có gì mới",
  },
  {
    href: "/new&blog/FAQ",
    label: "FAQ (Câu hỏi thường gặp)",
  },
];

export const SubNavbar = () => {
  const [value, setValue] = useState("")
  const pathname = usePathname();
  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#ffffff]">
        <div className="lg:flex block justify-between mb-5">
          {/* desktop */}
          <div className="hidden lg:flex flex-row justify-between items-center w-[743px]">
            {routeList.map(({ href, label }) => (
              <Link key={href} href={href} className={pathname === href ? "text-base px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#514F4F] hover:underline"}>
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
              {routeList.map(({ href, label }) => (
                <Link key={href} href={href} className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2",
                  pathname === href ? "font-bold text-[#BE5C59]" : "hover:underline"
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
