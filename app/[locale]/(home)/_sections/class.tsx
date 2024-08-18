"use client"

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/navigation";
import { useGetClass, useGetTitleClass } from "@/schema/services/home/class";
import { ArrowRight } from 'lucide-react';
import { useLocale } from "next-intl";
import Image from "next/image";

export const Class = () => {
  const locale = useLocale()
  
  const {data: titleClass, isLoading: isLoading1} = useGetTitleClass()
  const {data: info_classes, isLoading: isLoading2} = useGetClass();
  
  let discover = "Khám phá"
  if(locale === "en") discover = "Discovery"
  if (isLoading1 || isLoading2) return <section className="px-[16px] md:px-[80px] h-[400px] py-12 md:py-16 bg-[#FDF6EB]" />

  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-[#FDF6EB]">
      <h2 className="text-base text-[#BE5C59] text-left font-bold tracking-wider">
        {titleClass.name}
      </h2>
      <h2 className="flex text-3xl text-[#000F30] md:text-5xl text-left font-[600] md:font-bold mt-4 mb-10 gap-2">
        {titleClass.en_description || titleClass.vi_description}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-top">
        {info_classes.map((item: any) => {  
          let isComing = false
          if (item.description === "Sắp ra mắt trong thời gian tới" || item.description === "Coming soon") 
            isComing = true
          return(
            <div key={item.id} className={`${(info_classes.length % 3 === 1 && item.index + 1 === info_classes.length) && "xl:col-[2]"}`}>
            <Card className="w-full h-full border-0 shadow-none">
              <CardHeader className="relative overflow-hidden w-full h-[240px] rounded-xl shadow-md">
                <Image
                  src={`/${item.image}`}
                  alt="image about class"
                  fill
                  style={{
                    objectFit: "cover"
                  }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                <Badge
                  data-iscoming={isComing}
                  variant="secondary"
                  className="absolute justify-center text-base font-normal top-4 left-4 data-[isComing=false]:hidden w-[130px] h-[40px] bg-[#59BBBE] rounded-xl "
                  >
                  Coming soon
                </Badge>
              </CardHeader>

              <div className="flex flex-col justify-between mt-4 h-52">
                <CardTitle className="text-[#000F30] text-xl">{item.name}</CardTitle>
                <CardContent className="text-[#514F4F] text-base text-left">
                  {item.description}
                </CardContent>

                <Button
                  className="w-full h-14 rounded-2xl bg-white text-[#BE5C59] border-solid border-[1px] font-[600] border-[#BE5C59] group/arrow"
                  variant="ghost"
                  >
                  <Link href={item.content} className="flex gap-2">
                    {discover}
                    <ArrowRight className="group-hover/arrow:translate-x-2 transition-transform"/>
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        )})}
      </div>
    </section>
  );
};
