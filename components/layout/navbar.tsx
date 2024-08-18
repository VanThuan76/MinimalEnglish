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
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Image from "next/image";
import { Link, usePathname } from "@/navigation";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import clsx from "clsx";

interface RouteProps {
  href: string;
  label: string;
}

interface ClassProps {
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
    href: "/how to sign up",
    label: "Cách thức đăng ký",
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

const classList: ClassProps[] = [
  {
    href: "/class/1",
    label: "Lớp Mầm"
  },
  {
    href: "/class/2",
    label: "Lớp Rễ"
  },
  {
    href: "/class/3",
    label: "Lớp Thân"
  },
  {
    href: "/class/4",
    label: "Lớp Gốc Ngôn Ngữ"
  },
  {
    href: "/class/5",
    label: "Lớp Nhánh L/R/S/W"
  },
  {
    href: "/class/6",
    label: "Lớp Coach 1-1"
  },
]

export const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <header className="sticky flex flex-row justify-between items-center px-[16px] md:px-[80px] z-10 w-full h-[84px] sm:h-[98px] left-0 top-0 bg-[#FDF6EB]">
      <div className="flex flex-row justify-between items-center w-full h-full border-b-[2px] border-[#E0E2DE] md:border-b-0">
        <div className="relative w-[56px] h-[56px] md:w-[98px] md:h-[98px] overflow-hidden">
          <Image
            alt="logo"
            src="/images/logo.png"
            fill
            style={{
              objectFit: "cover"
            }}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                        fill
                        style={{
                          objectFit: "cover"
                        }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  {routeList.map(({ href, label },index) => (
                    index < 2 &&
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

                  <Accordion type="single" collapsible className="AccordionRoot my-0">
                    <AccordionItem value="siuu" className="my-0 border-[#D0D5DD]">
                      <AccordionTrigger className="text-left pt-0 pb-2 text-[#000F30] hover:no-underline font-normal">
                        Lớp học
                      </AccordionTrigger>
                      <AccordionContent>
                        {classList.map(({href, label}, index) => (
                          <div key={href}>
                            <Button
                              asChild
                              onClick={() => setIsOpen(false)}
                              variant="ghost"
                              className="justify-start text-base w-full"
                            >
                              <Link href={href} className={clsx("text-sm",pathname === href ? ' font-bold text-[#BE5C59]' : "text-[#282B27]")}>{label}</Link>
                            </Button>
                            <Separator className={clsx("mb-2 bg-[#D0D5DD]", index === classList.length - 1 && "hidden")}/>
                          </div>
                        ))}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {routeList.map(({ href, label },index) => (
                    index >= 2 &&
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
          <NavigationMenuList className="flex gap-[40px] items-center">
            <NavigationMenuItem className="flex gap-[40px]">
              {routeList.map(({ href, label }, index) => (
                index < 2 &&
                <Link key={href} href={href} className={clsx("text-base px-2 text-[#000F30] hover:underline", pathname === href && "font-bold text-[#BE5C59] hover:no-underline")}>
                  {label}
                </Link>
              ))}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="text-base font-normal text-[#000F30] bg-[#FDF6EB] p-0 data-[state=open]:bg-[#FDF6EB] hover:bg-[#FDF6EB] hover:text-[#000F30] focus:bg-[#FDF6EB] focus:text-[#000F30]" >
                Lớp học
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[432px] grid-cols-2 gap-5 p-4 bg-[#FDF6EB]">
                  {classList.map(({ href, label }) => (
                    <Link
                      href={href}
                      key={href}
                      className={clsx("p-3 text-sm hover:bg-[#fffcf7] line-clamp-2 rounded-md text-[#000F30]", pathname === href && "font-bold text-[#BE5C59]")}
                      >
                        {label}
                    </Link>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="flex gap-[40px]">
              {routeList.map(({ href, label }, index) => (
                index >= 2 &&
                <Link key={href} href={href} className={clsx("text-base px-2 text-[#000F30] hover:underline", pathname === href && "font-bold text-[#BE5C59] hover:no-underline")}>
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
