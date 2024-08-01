import Image from "next/image";

export const Vision = () => {
  return (
    <section className="py-[60px] px-[16px] md:px-[80px] bg-white">
      <div className="grid lg:grid-cols-2 place-items-center gap-12">
        {/* desktop */}
        <div className="hidden lg:block">
          <div className="flex relative w-[330px] h-[330px] xl:w-[577px] xl:h-[577px]">
            <div className="flex absolute top-0 left-0 w-full h-full justify-end items-start mr-2.5">
              <Image
                width={889}
                height={530}
                src="/images/about/IMG_2711.png"
                alt="about"
                className="w-[310px] z-[2] h-[310px] rounded-[32px] xl:w-[530px] xl:h-[530px] drop-shadow-2xl object-cover object-center"
              />
            </div>

            <div className="flex absolute top-0 right-0 w-full h-full justify-start items-end mr-2.5">
                <div className="z-0 w-[310px] h-[310px] xl:w-[530px] xl:h-[530px] bg-[#E5BEBD] rounded-[32px]"></div>
            </div>
          </div>
        </div>

        <div >
          <h2 className="text-[32px] font-[600] md:text-5xl md:py-[40px] md:font-bold mb-4 text-[#BE5C59]">
            Tầm nhìn
          </h2>
          <p className="text-[#514F4F] text-[18px]">
          Với tầm nhìn xa và trái tim đầy nhiệt huyết, Minimal English mong muốn trở thành lớp
            học tiếng Anh hàng đầu, giúp đỡ các em học sinh hiện thực hóa ước mơ. Chúng tôi tin rằng,
             giáo dục không phải là con đường duy nhất dẫn đến thành công nhưng sẽ là con đường chắc chắn và an toàn nhất.
            Chúng tôi cam kết lan tỏa phương pháp và giá trị của Minimal English tới nhiều học sinh hơn nữa.

          </p>
        </div>

        {/* mobile */}
        <div className="block lg:hidden">
          <div className="flex relative w-[330px] h-[330px]">
            <div className="flex absolute top-0 left-0 w-full h-full justify-end items-start mr-2.5">
              <Image
                width={889}
                height={530}
                src="/images/about/IMG_2711.png"
                alt="about"
                className="w-[310px] z-[2] h-[310px] rounded-[32px]  drop-shadow-2xl object-cover object-center"
              />
            </div>

            <div className="flex absolute top-0 right-0 w-full h-full justify-start items-end mr-2.5">
                <div className="z-0 w-[310px] h-[310px] bg-[#E5BEBD] rounded-[32px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
