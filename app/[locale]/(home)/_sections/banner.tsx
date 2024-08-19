"use client"

import { useGetBanner, useGetTitleBanner } from "@/schema/services/home/banner";
import Image from "next/image";

export const Banner = () => {
  const {data: titleBanner, isLoading: isLoading1} = useGetTitleBanner()
  const {data: banner, isLoading: isLoading2} = useGetBanner()
  if (isLoading1 || isLoading2) return <section className="py-[60px] px-[16px] h-[400px] md:px-[80px] bg-[#FDF6EB]"></section>
  return (
    <section className="py-[60px] px-[16px] md:px-[80px] bg-[#FDF6EB]">
      <div className="flex flex-col lg:flex-row [@media(max-width:1028px)]:items-center justify-between">
        <div className="lg:max-w-[460px] xl:max-w-[600px] [@media(min-width:1330px)]:max-w-[700px]">
          <h2 className="text-[32px] font-[600] md:text-5xl md:font-bold mb-4 text-[#000F30]">
            {titleBanner.en_description || titleBanner.vi_description}
          </h2>
          <h2 className="text-[32px] font-[600] md:text-5xl md:pb-[20px] md:pt-3 md:font-bold mb-4 text-[#BE5C59]">
            {banner.title}
          </h2>
          <p className="text-[#514F4F] text-[16px] lg:text-[20px]">
            {banner.content}
          </p>
        </div>

        <div className="grid grid-rows-3 grid-cols-3 w-[330px] h-[330px] lg:w-[400px] lg:h-[400px] place-items-center [@media(max-width:1028px)]:my-8">
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"></div>

          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl overflow-hidden">
            <Image
              fill
              style={{
                objectFit: "cover"
              }}
              src={`/${banner.image}`}
              alt="image_1"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl overflow-hidden">
            <Image
              fill
              style={{
                objectFit: "cover"
              }}
              src={`/${banner.image_2}`}
              alt="image_2"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] relative">
            <div className="w-[76.38px] h-[76.38px] sm:w-[86.38px] sm:h-[86.38px] absolute bg-[#F8EDED] left-[14.07%] top-[15.83%] rounded-[24px]"></div>  
            <div className="w-[24.44px] h-[24.44px] sm:w-[34.44px] sm:h-[34.44px] absolute bg-[#A1423F] left-[64.17%] top-[9.42%] rounded-lg rotate-[-10.55deg]"></div>  
          </div>  

          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl overflow-hidden">
            <Image
              fill
              style={{
                objectFit: "cover"
              }}
              src={`/${banner.image_3}`}
              alt="image_3"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl overflow-hidden">
            <Image
              fill
              style={{
                objectFit: "cover"
              }}
              src={`/${banner.image_4}`}
              alt="image_4"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl overflow-hidden">
            <Image
              fill
              style={{
                objectFit: "cover"
              }}
              src={`/${banner.image_5}`}
              alt="image_5"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl overflow-hidden">
            <Image
              fill
              style={{
                objectFit: "cover"
              }}
              src={`/${banner.image_6}`}
              alt="image_6"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl overflow-hidden">
            <Image
              fill
              style={{
                objectFit: "cover"
              }}
              src={`/${banner.image_7}`}
              alt="image_7"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
