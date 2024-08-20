"use client"

import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useRouter } from "@/navigation"; 
import { useGetAllCategory } from "@/schema/services/news&blog/allcategory"; 
import { useTranslations } from "next-intl";

export const TabsBar = () => {
  const {data: category, isLoading} = useGetAllCategory()
  const {state, setState} = useGlobalState()
  const router = useRouter()
  const t = useTranslations()
  if(isLoading) return <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#ffffff]"></div>

  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#ffffff]">
        <div className="lg:flex block justify-between mb-5">
          {/* desktop */}
          <div className="hidden lg:flex flex-row justify-between items-center w-[760px]">
            <Link 
              href="/news&blog"
              onClick={() => {
                setState({...state, order: 0})
              }}
              className={state.order === 0 ? "text-sm px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#514F4F] hover:underline"}
            >
              {t("all")}
            </Link>
            {category.map((item: any) => (
              <Link 
                href="/news&blog"
                onClick={() => {
                  setState({...state, order: item.order})
                }}
                key={item.order}
                className={state.order === item.order ? "text-sm px-2 font-bold text-[#BE5C59]" : "text-base px-2 text-[#514F4F] hover:underline"}>
                {item.name}
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
              <Link
                href="/news&blog"
                onClick={() => {
                  setState({...state, order: 0})
                }} 
                className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2", state.order === 0 ? "font-bold text-[#BE5C59]" : "hover:underline"
              )}>
                {t("all")}
              </Link>
              {category.map((item: any) => (
                <Link
                  href="/news&blog"
                  onClick={() => {
                    setState({...state, order: item.order})
                  }}
                  key={item.order} 
                  className={clsx("text-base text-[#000F30] flex-[0_0_auto] mx-2", state.order === item.order ? "font-bold text-[#BE5C59]" : "hover:underline"
                )}>
                  {item.name}
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
              value={state.title}
              onChange={(e) => {
                setState({...state, title: e.target.value})
              }}
              className="bg-white outline-none w-full text-[#000F30] text-base"
            />
            <button onClick={() => {
              router.push("/news&blog")
            }}>
              <Search color="#000F30" strokeWidth={1.5}/>
            </button>
          </form>
          
        </div>
      <Separator className="flex bg-[#D0D5DD]"/>
    </div>
  );
};
