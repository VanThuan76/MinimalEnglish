"use client";
import { Menu, X } from "lucide-react";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import { Link, usePathname } from "@/navigation";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/",
    label: "Trang chủ",
  },
  {
    href: "/aboutus",
    label: "Về chúng tôi",
  },
  {
    href: "/class",
    label: "Lớp học",
  },
  {
    href: "/library",
    label: "Thư viện",
  },
  {
    href: "/new&blog",
    label: "New & Blog",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="sticky flex flex-row justify-between items-center px-[16px] md:px-[80px] z-10 w-full h-[84px] sm:h-[98px] left-0 top-0 bg-[#FDF6EB]">
      <div className="flex flex-row justify-between items-center w-full h-full border-b-[2px] border-[#E0E2DE] md:border-b-0">
        <div className="relative w-[56px] h-[56px] md:w-[98px] md:h-[98px] overflow-hidden ">
          <Image
            alt="logo"
            src="/images/logo.png"
            fill={true}
            style={{
              objectFit: "cover"
            }}
          />
        </div>
        
        {/* <!-- Mobile --> */}
        <div className="flex items-center lg:hidden ">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Menu
                strokeWidth="0.75px"
                onClick={() => setIsOpen(!isOpen)}
                className="cursor-pointer lg:hidden w-[45px] h-auto text-[#000F30]"
              />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="flex flex-col justify-between bg-card border-secondary bg-[#FDF6EB]"
            >
              <div>
                <SheetHeader className="mb-4 ml-4">
                  <SheetTitle className="flex justify-between items-center">
                    <div className="relative w-[56px] h-[56px] overflow-hidden ">
                      <Image
                        alt="logo"
                        src="/images/logo.png"
                        fill={true}
                        style={{
                          objectFit: "cover"
                        }}
                      />
                    </div>

                    <button 
                      onClick={() => setIsOpen(!isOpen)} 
                      className="outline-none w-[56px] h-[56px] flex justify-center items-center"                 
                    >
                      <X strokeWidth="1.5px" className="h-[32px] w-[32px]" color="black"/>
                    </button>

                  </SheetTitle>
                </SheetHeader>
                <Separator className="mb-2 bg-[#E0E2DE]" />

                <div className="flex flex-col gap-2">
                  {routeList.map(({ href, label }) => (
                    <div key={href}>
                        <Button
                          asChild
                          onClick={() => setIsOpen(false)}
                          variant="ghost"
                          className="justify-start text-base w-full"
                        >
                          <Link href={href} className={pathname === href ? ' font-bold text-[#BE5C59]' : "text-[#282B27]"}>{label}</Link>
                        </Button>
                        <Separator className="mb-2 bg-[#D0D5DD]"/>
                    </div>
                  ))}
                </div>
              </div>

            </SheetContent>
          </Sheet>
        </div>


        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList>
            <NavigationMenuItem className="flex justify-between w-[751px]">
              {routeList.map(({ href, label }) => (
                  <Link key={href} href={href} className={pathname === href ? "text-base px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#000F30] hover:underline"}>
                    {label}
                  </Link>
              ))}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
