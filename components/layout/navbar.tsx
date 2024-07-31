"use client";
import { ChevronsDown, Menu, X } from "lucide-react";
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
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import path from "path";

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
    <header className="flex flex-row justify-between items-center px-[20px] md:px-[106px] absolute w-full h-[84px] sm:h-[98px] left-0 top-0 bg-[#FDF6EB]">
      <div className="flex flex-row justify-between items-center w-full h-full border-b-[2px] border-[#E0E2DE] md:border-b-0">
        <Image 
          height={56}
          width={56}
          alt="logo"
          src="/images/logo.png"
          className="w-[56px] h-auto md:w-[98px]"
        />
        
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
                    <Image 
                      height={56}
                      width={56}
                      alt="logo"
                      src="/images/logo.png"
                    />

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
                          className="justify-start text-base"
                        >
                          <Link href={href} className={pathname === href ? ' font-bold text-[#BE5C59]' : "text-[#282B27]"}>{label}</Link>
                        </Button>
                        <Separator className="mb-2 bg-[#D0D5DD]" />
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
                  <Link key={href} href={href} className={pathname === href ? "text-base px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#000F30]"}>
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
