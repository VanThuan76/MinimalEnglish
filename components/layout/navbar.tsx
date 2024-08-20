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
import { useGetAll } from "@/schema/services/all";
import { useGetAllClass } from "@/schema/services/home/class";
import { All_Page } from "@/app/[locale]/type";

export const Navbar = () => {
  const {data: menu, isLoading: isLoading1} = useGetAll()
  const {data: classList, isLoading: isLoading2} = useGetAllClass()
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  if (isLoading1 || isLoading2) return <header className="sticky flex flex-row justify-between items-center px-[16px] md:px-[80px] z-10 w-full h-[84px] sm:h-[98px] left-0 top-0 bg-[#FDF6EB]"></header>

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
                  {menu?.map((item: All_Page) => (
                    item?.order !== 3
                      ? <div key={item?.url}>
                          <Button
                            asChild
                            onClick={() => {
                              setIsOpen(false)
                            }}
                            variant="ghost"
                            className="justify-start text-base w-full"
                          >
                            <Link href={item?.url} className={pathname === `${item?.url}` ? ' font-bold text-[#BE5C59]' : "text-[#282B27]"}>{item?.name}</Link>
                          </Button>
                          <Separator className="mb-2 bg-[#D0D5DD]"/>
                        </div>
                      : <Accordion key={item?.name} type="single" collapsible className="AccordionRoot my-0">
                          <AccordionItem value="siuu" className="my-0 border-[#D0D5DD]">
                            <AccordionTrigger className="text-left pt-0 pb-2 text-[#000F30] hover:no-underline font-normal">
                              {item?.name}
                            </AccordionTrigger>
                            <AccordionContent>
                              {classList?.map((prop: any, index: number) => (
                                <div key={index}>
                                  <Button
                                    asChild
                                    onClick={() => setIsOpen(false)}
                                    variant="ghost"
                                    className="justify-start text-base w-full"
                                  >
                                    <Link href={`${item?.url}/${prop?.id}`} className={clsx("text-sm",pathname === `${item?.url}/${prop?.id}` ? ' font-bold text-[#BE5C59]' : "text-[#282B27]")}>{prop.name}</Link>
                                  </Button>
                                  <Separator className={clsx("mb-2 bg-[#D0D5DD]", index === classList?.length - 1 && "hidden")}/>
                                </div>
                              ))}
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                  ))}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* <!-- Desktop --> */}
        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList className="flex gap-[40px] items-center">
              {menu?.map((item: any) => (
                item?.order !== 3
                ? <Link 
                    key={item.url} 
                    href={item?.url} 
                    className={clsx("text-base px-2 text-[#000F30] hover:underline", pathname === item?.url && "font-bold text-[#BE5C59] hover:no-underline")}
                  >
                    {item?.name}
                  </Link>
                : 
                  <NavigationMenuItem key={item?.url}>
                    <NavigationMenuTrigger className={clsx("text-base font-normal text-[#000F30] bg-[#FDF6EB] p-0 data-[state=open]:bg-[#FDF6EB] hover:bg-[#FDF6EB] hover:text-[#000F30] focus:bg-[#FDF6EB] focus:text-[#000F30]",pathname === item?.url && "font-bold text-[#BE5C59]" )} >
                      {item?.name}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid w-[432px] grid-cols-2 gap-5 p-4 bg-[#FDF6EB]">
                        {classList?.map((prop: any) => (
                          <Link
                            href={`${item?.url}/${prop?.id}`}
                            key={prop?.id}
                            className={clsx("p-3 text-sm hover:bg-[#fffcf7] line-clamp-2 rounded-md text-[#000F30]", pathname === `${item?.url}/${prop?.id}` && "font-bold text-[#BE5C59]")}
                          >
                            {prop?.name}
                          </Link>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
              ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};