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
    label: "Writing",
  },
  {
    href: "/library/#speaking",
    label: "Speaking",
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
  const [value, setValue] = useState("");
  const pathname = usePathname();
  return (
    <div className="px-[16px] md:px-[0px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Bài giảng</h1>
      
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
