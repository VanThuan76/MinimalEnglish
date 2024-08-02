import { Outstanding_class } from "@/app/[locale]/type";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export const Class = ({label, title, info_classes}: Outstanding_class) => {
  return (
    <section className="px-4 lg:px-24 py-12 md:py-16 bg-[#FDF6EB]">
      <h2 className="text-base text-[#BE5C59] text-left font-bold tracking-wider">
        LỚP HỌC NỔI BẬT
      </h2>

      <h2 className="flex text-3xl text-[#000F30] md:text-5xl text-left font-[600] md:font-bold mt-4 mb-10 gap-2">
        Các lớp học tại Minimal English
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-top">
        {info_classes.map(({ name, description, image }, index) => (
          <div key={index}>
            <Card className="w-full border-0 shadow-none h-auto">
              <CardHeader className="relative overflow-hidden w-full h-[240px] rounded-xl shadow-xl">
                <Image
                  src={image}
                  alt="image about class"
                  layout="fill"
                  objectFit="cover"
                />
              </CardHeader>

              <CardContent className="text-[#514F4F] text-base text-left">
                <CardTitle className="text-[#000F30] text-xl my-3">{name}</CardTitle>
                {description}
              </CardContent>

              <CardFooter>
                <Button 
                  className="w-full py-6 bg-[#D89E9C] border-solid border-[#D0D5DD]"
                  variant="ghost"
                >Khám phá </Button>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
