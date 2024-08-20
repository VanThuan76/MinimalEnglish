"use client"

import CopyPathnameButton from "@/app/[locale]/(home)/news&blog/[slug]/_section/copyPathname" 
import { ShareFacebook } from "@/app/[locale]/(home)/news&blog/[slug]/_section/shareFacebook" 
import { ShareZalo } from "@/app/[locale]/(home)/news&blog/[slug]/_section/shareZalo" 
import { Detail } from "@/app/[locale]/type"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"

export const News: React.FC<{detail: Detail}> = ({detail}) => {  
  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white lg:grid grid-cols-3 gap-10">
      <div>
        <h2 className="font-semibold text-[32px] text-black leading-[52px] mb-8" dangerouslySetInnerHTML={{__html: detail.title}}/>
        <Separator className="bg-[#98A2B3] mb-8"/>
        <div className="text-[#514F4F] mb-10" dangerouslySetInnerHTML={{__html: detail.description}} />
        <div className="w-[300px]">
          <Separator className="bg-[#98A2B3] mb-4" />
          <div className="flex gap-2 items-center">
            <div className="text-black">Chia Sẻ:</div>
            <ShareFacebook />
            <ShareZalo />
            <CopyPathnameButton />
          </div>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="relative w-full lg:h-[317px] xl:h-[413px] overflow-hidden mb-8">
          <Image
            fill
            style={{objectFit: "cover"}}
            src={`/${detail.image}`}
            alt=""
            sizes=""
            priority
          />
        </div>
        <div className="text-black" dangerouslySetInnerHTML={{__html: detail.content}}/>
      </div>
      <Separator className="lg:col-span-3 bg-[#98A2B3] mt-7 lg:mt-0"/>
    </section>
  )
}
