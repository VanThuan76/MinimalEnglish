import CopyPathnameButton from "@/app/[locale]/(home)/new&blog/detailNews/_section/copyPathname"
import { ShareFacebook } from "@/app/[locale]/(home)/new&blog/detailNews/_section/shareFacebook"
import { ShareZalo } from "@/app/[locale]/(home)/new&blog/detailNews/_section/shareZalo"
import { Detail } from "@/app/[locale]/type"
import QuoteIcon from "@/components/icons/quote-icon"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"

export const News: React.FC<{detail: Detail}> = ({detail}) => {  
  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white lg:grid grid-cols-3 gap-10">
      <div>
        <h2 className="font-semibold text-[32px] text-black leading-[52px] mb-8">{detail.title}</h2>
        <Separator className="bg-[#98A2B3] mb-8"/>
        <p className="text-[#514F4F] mb-10">{detail.description}</p>
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
            src={detail.image}
            alt=""
            sizes=""
            priority
          />
        </div>
        <div className="flex gap-2">
          <div className="text-black mb-8 leading-6">
            {detail.content}
          </div>
          <QuoteIcon className="w-[230px]" stroke="#98A2B3" fill="#98A2B3"/>
        </div>
        <div className="text-white bg-[#667085] font-semibold text-2xl p-3 mb-8 leading-9">
          {detail.content1}
        </div>
        <div className="text-black mb-8 leading-6">
          {detail.content2}
        </div>
        <div className="text-black mb-8 leading-6">
          {detail.content3}
        </div>
        <div className="text-black mb-8 leading-6">
          {detail.content4}
        </div>
        <div className="text-black mb-8 leading-6">
          <div>{detail.content5.ul}</div>
          <ul className="list-disc">
            {detail.content5.li.map((item, index) => (
              <li className="ml-5" key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="text-black leading-6">
          {detail.content6}
        </div>
      </div>
      <Separator className="lg:col-span-3 bg-[#98A2B3] mt-7 lg:mt-0"/>
    </section>
  )
}
