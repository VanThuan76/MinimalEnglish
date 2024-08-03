import { Outstanding_class } from "@/app/[locale]/type";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';
import Image from "next/image";

export const Class = ({label, title, info_classes}: Outstanding_class) => {
  return (
    <section className="px-4 lg:px-24 py-12 md:py-16 bg-[#FDF6EB]">
      <h2 className="text-base text-[#BE5C59] text-left font-bold tracking-wider">
        {label}
      </h2>

      <h2 className="flex text-3xl text-[#000F30] md:text-5xl text-left font-[600] md:font-bold mt-4 mb-10 gap-2">
        {title}
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-top">
        {info_classes.map(({ name, description, image }, index) => (
          <div key={index} className={`${(info_classes.length % 3 === 1 && index + 1 === info_classes.length) && "xl:col-[2]"}`}>
            <Card className="w-full h-full border-0 shadow-none">
              <CardHeader className="relative overflow-hidden w-full h-[240px] rounded-xl shadow-md">
                <Image
                  src={image}
                  alt="image about class"
                  fill={true}
                  style={{
                    objectFit: "cover"
                  }}
                  sizes="(max-width: 440px)"
                />
              </CardHeader>

              <div className="flex flex-col justify-between mt-4 h-52">
                <CardTitle className="text-[#000F30] text-xl">{name}</CardTitle>
                <CardContent className="text-[#514F4F] text-base text-left">
                  {description}
                </CardContent>

                <Button 
                  className="w-full bg-[#D89E9C] border-solid border-[1px] font-[600] border-[#D0D5DD] gap-2"
                  variant="ghost"
                >
                  Khám phá
                  <ArrowRight />
                </Button>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
