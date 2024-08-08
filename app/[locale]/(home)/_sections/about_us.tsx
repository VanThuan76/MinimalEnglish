import { About } from "@/app/[locale]/type";
import Image from "next/image";

export const AboutUs = ({title,label,content,image}: About) => {
  return (
    <section className="py-[60px] px-[16px] md:px-[80px] bg-white">
      <div className="grid lg:grid-cols-2 gap-12 place-items-center">
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="flex relative w-[330px] h-[330px] xl:w-[577px] xl:h-[577px]">
            <div className="flex absolute w-full h-full justify-start items-start mr-2.5">
              <div className="relative w-[230px] z-[2] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] drop-shadow-2xl overflow-hidden">
                <Image
                  fill
                  style={{
                    objectFit: "cover"
                  }}
                  src={image.image_1}
                  alt="about"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            </div>

            <div className="flex absolute w-full h-full justify-center items-center mr-2.5">
                <div className="w-[230px] z-[0] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] bg-[#BE5C59]"></div>
            </div>

            <div className="flex absolute w-full h-full justify-end items-end mr-2.5">
              <div className="relative w-[230px] z-[1] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] drop-shadow-2xl overflow-hidden">
                <Image
                  fill
                  style={{
                    objectFit: "cover"
                  }}
                  src={image.image_2}
                  alt="about"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                /> 
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[16px] font-bold md:mt-[10px] mb-4 text-[#BE5C59]">
            {label}           
          </h2>
          
          <h2 className="text-[32px] font-[600] md:text-5xl md:mt-[10px] md:font-bold text-[#000F30]">
            {title[0]}
          </h2>

          <h2 className="text-[32px] font-[600] md:text-5xl md:mb-[30px] md:mt-[10px] md:font-bold mb-6 text-[#BE5C59]">
            {title[1]}
          </h2>
          <p className="text-[#514F4F] text-[18px]">
            {content}
          </p>
        </div>

        {/* mobile */}
        <div className="block lg:hidden">
            <div className="flex relative w-[330px] h-[330px]">
                <div className="flex absolute w-full h-full justify-start items-start mr-2.5">
                  <div className="relative w-[230px] z-[2] h-[230px] rounded-[32px] drop-shadow-2xl overflow-hidden">
                    <Image
                      fill={true}
                      style={{
                        objectFit: "cover"
                      }}
                      src={image.image_1}
                      alt="about"
                    />
                  </div>
                </div>

                <div className="flex absolute w-full h-full justify-center items-center mr-2.5">
                    <div className="w-[230px] z-[0] h-[230px] rounded-[32px] bg-[#BE5C59]"></div>
                </div>

                <div className="flex absolute w-full h-full justify-end items-end mr-2.5">
                  <div className="relative w-[230px] z-[1] h-[230px] rounded-[32px] drop-shadow-2xl overflow-hidden">
                    <Image
                      fill={true}
                      style={{
                        objectFit: "cover"
                      }}
                      src={image.image_2}
                      alt="about"
                    />
                  </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
