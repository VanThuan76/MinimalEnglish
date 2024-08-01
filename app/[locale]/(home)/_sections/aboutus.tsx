import Image from "next/image";

export const AboutUs = () => {
  return (
    <section className="py-[60px] px-[16px] md:px-[80px] bg-white">
      <div className="grid lg:grid-cols-2 gap-12 place-items-center">
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="flex relative w-[330px] h-[330px] xl:w-[577px] xl:h-[577px]">
            <div className="flex absolute w-full h-full justify-start items-start mr-2.5">
              <Image
                width={360}
                height={410}
                src="/images/about/about_1.jpeg"
                alt="about"
                className="w-[230px] z-[2] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] drop-shadow-2xl object-cover object-center"
              />
            </div>

            <div className="flex absolute w-full h-full justify-center items-center mr-2.5">
                <div className="w-[230px] z-[0] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] bg-[#BE5C59]"></div>
            </div>

            <div className="flex absolute w-full h-full justify-end items-end mr-2.5">
              <Image
                width={480}
                height={360}
                src="/images/about/about_2.png"
                alt="about"
                className="w-[230px] z-[1] h-[230px] rounded-[32px] xl:w-[360px] xl:h-[360px] drop-shadow-2xl object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-[16px] font-bold md:mt-[10px] mb-4 text-[#BE5C59]">
            VỀ MINIMAL ENGLISH
          </h2>
          
          <h2 className="text-[32px] font-[600] md:text-5xl md:mt-[10px] md:font-bold text-[#000F30]">
            Là nơi khởi nguồn từ
          </h2>

          <h2 className="text-[32px] font-[600] md:text-5xl md:mb-[30px] md:mt-[10px] md:font-bold mb-6 text-[#BE5C59]">
            đam mê và nghị lực
          </h2>
          <p className="text-[#514F4F] text-[18px]">
            Với phương pháp Hybrid Learning, kết hợp giữa học trực tiếp và học trực tuyến, chúng tôi mang đến cho học viên môi trường thân thiện, phương pháp học tập tối giản nhưng hiệu quả. Tại Minimal English, học viên không chỉ học kiến thức mà còn nhận được sự tự tin và 
            động lực để phát triển. Chúng tôi cam kết mang lại chất lượng giảng dạy tốt nhất, giúp học viên đạt được mục tiêu học tập và vượt qua 
            mọi thử thách.
          </p>
        </div>

        {/* mobile */}
        <div className="block lg:hidden">
            <div className="flex relative w-[330px] h-[330px]">
                <div className="flex absolute w-full h-full justify-start items-start mr-2.5">
                <Image
                    width={230}
                    height={262}
                    src="/images/about/about_1.jpeg"
                    alt="about"
                    className="w-[230px] z-[2] h-[230px] rounded-[32px] drop-shadow-2xl object-cover object-center"
                />
                </div>

                <div className="flex absolute w-full h-full justify-center items-center mr-2.5">
                    <div className="w-[230px] z-[0] h-[230px] rounded-[32px] bg-[#BE5C59]"></div>
                </div>

                <div className="flex absolute w-full h-full justify-end items-end mr-2.5">
                <Image
                    width={307}
                    height={230}
                    src="/images/about/about_2.png"
                    alt="about"
                    className="w-[230px] z-[1] h-[230px] rounded-[32px] drop-shadow-2xl object-cover object-center"
                />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
