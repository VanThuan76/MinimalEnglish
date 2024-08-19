"use client"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import { useGetTitleWhyUs, useGetWhyUs } from "@/schema/services/home/whyUs";
import Image from "next/image";
  
export const WhyUs = () => {
  const {data: titelWhyUs, isLoading: isLoading1} = useGetTitleWhyUs()
  const {data: whyUs, isLoading: isLoading2} = useGetWhyUs()
  if(isLoading1 || isLoading2) return <section className="w-full px-[16px] md:px-[80px] h-[400px] py-12 md:py-16 bg-[#FDF6EB]"></section>
  
  return (
    <section className="w-full px-[16px] md:px-[80px] py-12 md:py-16 bg-[#FDF6EB]">
      <div className="mb-8">
        <h2 className="text-base font-bold text-[#BE5C59] text-left tracking-wider mb-6">
          {titelWhyUs.name}
        </h2>

        <h2 className="text-3xl md:text-5xl text-left font-[600] md:font-bold text-[#000F30]">
          {titelWhyUs.en_description || titelWhyUs.vi_description}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-[120px]">
        <Accordion type="single" collapsible className="AccordionRoot" defaultValue="0">
          {whyUs.map((item: any, index: number) => (
            <AccordionItem key={index} value={`${index}`}>
              <AccordionTrigger className="text-left text-[#000F30]">
                <div className="flex flex-row text-2xl py-3">
                  <div className="pr-4">{index + 1}</div>
                  {item.title}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-[#667085]">{item.content}</AccordionContent>
            </AccordionItem>
        ))}
        </Accordion>
        
        <div className="relative overflow-hidden w-full h-[500px] xl:h-[760px] rounded-[32px]">
          <Image
            fill
            style={{objectFit: "cover"}}
            src={`/${titelWhyUs.image}`}
            alt="why_us"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </section>
);
};
  