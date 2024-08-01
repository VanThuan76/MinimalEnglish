import { banner } from "@/app/[locale]/type";
import Image from "next/image";

export const Banner = ({title, slogan, content} : banner) => {
  return (
    <section className="py-[60px] px-[16px] md:px-[80px] bg-[#FDF6EB]">
      <div className="grid lg:grid-cols-2 place-items-center gap-11">
        <div >
          <h2 className="text-[32px] font-[600] md:text-5xl md:font-bold mb-4 text-[#000F30]">
            {title} - 
          </h2>
          <h2 className="text-[32px] font-[600] md:text-5xl md:pb-[20px] md:pt-3 md:font-bold mb-4 text-[#BE5C59]">
            {slogan}
          </h2>
          <p className="text-[#514F4F] text-[16px] lg:text-[20px]">
            {content}
          </p>
        </div>

        <div className="grid grid-rows-3 grid-cols-3 w-[330px] h-[330px] lg:w-[400px] lg:h-[400px] place-items-center">
          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"></div>

          <Image
            width={120}
            height={160}
            src="/images/banner/banner_1.png"
            alt="about"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl object-cover object-center"
          />

          <Image
            width={160}
            height={120}
            src="/images/banner/banner_2.jpeg"
            alt="about"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl object-cover object-center"
          />

          <div className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] relative">
            <div className="w-[76.38px] h-[76.38px] sm:w-[86.38px] sm:h-[86.38px] absolute bg-[#F8EDED] left-[14.07%] top-[15.83%] rounded-[24px]"></div>  
            <div className="w-[24.44px] h-[24.44px] sm:w-[34.44px] sm:h-[34.44px] absolute bg-[#A1423F] left-[64.17%] top-[9.42%] rounded-lg rotate-[-10.55deg]"></div>  
          </div>  

          <Image
            width={260}
            height={120}
            src="/images/banner/banner_3.jpeg"
            alt="about"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl object-cover object-[-40px]"
          />

          <Image
            width={120}
            height={160}
            src="/images/banner/banner_4.png"
            alt="about"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl object-cover object-center"
          />

          <Image
            width={120}
            height={160}
            src="/images/banner/banner_5.jpeg"
            alt="about"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl object-cover object-center"
          />

          <Image
            width={120}
            height={160}
            src="/images/banner/banner_6.png"
            alt="about"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl object-cover object-center"
          />

          <Image
            width={160}
            height={120}
            src="/images/banner/banner_7.png"
            alt="about"
            className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] rounded-3xl object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};
