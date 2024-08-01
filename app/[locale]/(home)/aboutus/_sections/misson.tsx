import { Mission } from "@/app/[locale]/type";
import Image from "next/image";

export const Misson = ({label,content_1,content_2}: Mission) => {
  return (
    <section className="py-[60px] px-[16px] md:px-[80px] bg-white">
      <div className="grid lg:grid-cols-2 place-items-center gap-11">
        <div >
          <h2 className="text-[32px] font-[600] md:text-5xl md:py-[40px] md:font-bold mb-4 text-[#BE5C59]">
            {label}
          </h2>
          <ul className="text-[#514F4F] text-[18px] list-disc">
            <li className="mx-[20px]">{content_1}</li>
            <li className="mx-[20px]">{content_2}</li>
          </ul>
        </div>

        <div className="flex relative w-[330px] h-[330px] xl:w-[577px] xl:h-[577px]">
          <div className="flex absolute top-0 left-0 w-full h-full justify-end items-start mr-2.5">
            <Image
              width={550}
              height={733}
              src="/images/about/IMG_3106.png"
              alt="about"
              className="w-[310px] z-[2] h-[310px] rounded-[32px] xl:w-[530px] xl:h-[530px] drop-shadow-2xl object-cover object-center"
            />
          </div>

          <div className="flex absolute top-0 right-0 w-full h-full justify-start items-end mr-2.5">
            <div className="z-0 w-[310px] h-[310px] bg-[#E5BEBD] xl:w-[530px] xl:h-[530px] rounded-[32px]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
