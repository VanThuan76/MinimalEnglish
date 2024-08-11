"use client";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link, usePathname } from "@/navigation";
import clsx from "clsx";
import { useState } from "react";

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
    href: "/library#skilldocument",
    label: "Tài liệu các kỹ năng",
  },
  {
    href: "/library/#usermanual",
    label: "hướng dẫn sử dụng",
  },  
];

export const Navbardocument = () => {
  const [value, setValue] = useState("");
  const pathname = usePathname();
  return (
    <div className="px-[16px] md:px-[0px] pt-3 md:pt-6 w-full bg-[#FDF6EB]">
      
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Tài liệu</h1>
      
      <div className="lg:flex block justify-between mb-5">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[743px]">
          {routeList.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={pathname === href ? "text-base font-bold text-[#BE5C59]" : "text-base text-left text-[#514F4F] hover:underline"}
            >
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
              <Link
                key={href}
                href={href}
                className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2",
                  pathname === href ? "font-bold text-[#BE5C59]" : "hover:underline"
                )}
              >
                {label}
              </Link>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
      <Separator className="flex bg-[#D0D5DD]" />
    </div>
  );
};
