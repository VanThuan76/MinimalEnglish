'use client';

import { Separator } from "@/components/ui/separator";
import { MailIcon, PhoneIcon } from "lucide-react";
import { Link, usePathname } from "@/navigation";
import Image from "next/image";
import MessengerIcon from "@/components/icons/messenger-icon";
import { useTranslations } from 'next-intl';
import { useGetAll } from "@/schema/services/all";
import { All_Page } from "@/app/[locale]/type";

export const FooterSection = () => {
    const { data: menu, isLoading: isLoading } = useGetAll()
    const pathname = usePathname();
    const t = useTranslations();

    if (isLoading) return <></>

    return (
        <footer id="footer" className="w-full py-12 px-8 sm:px-16 lg:px-[80px] bg-[#f2f4f7]">
            <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="flex flex-col gap-4">
                        <Link href="#" className="flex font-bold items-center">
                            <Image src="/images/logo.png" alt="logo" width={98} height={98} />
                        </Link>
                        <div className="flex items-center gap-3">
                            <PhoneIcon className="w-6 h-6 mr-0 text-[#000F30]" />
                            <div className="flex flex-col">
                                <h3 className="font-normal leading-[20.43px] text-justify text-[16px] text-[#000F30] inline">Hotline: <span className="font-normal leading-[20.43px] text-justify text-[16px] text-[#000F30]">{t('infomation.hotline')}</span></h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MessengerIcon className="w-6 h-6 mr-0 text-[#000F30]" />
                            <div className="flex flex-col">
                                <h3 className="font-normal leading-[20.43px] text-justify text-[15px] text-[#000F30] inline">Messenger: <Link
                                    target="_blank"
                                    href="https://www.facebook.com/messages/t/998301663696890"
                                    className="font-normal leading-[20.43px] text-justify text-[16px] text-[#000F30] inline">
                                    {t('infomation.message')}
                                </Link></h3>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <MailIcon className="w-6 h-6 mr-0 text-[#000F30]" />
                            <div className="">
                                <h3 className="font-normal leading-[20.43px] text-justify text-[15px] text-[#000F30] mr-0 inline">Email: <span className="font-normal leading-[20.43px] text-justify text-[16px] text-[#000F30]">{t('infomation.email')}</span></h3>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Link target="_blank" href="https://www.facebook.com/hangngaluna190188" className="w-8 h-8 hover:border-b-2">
                                <Image src="/images/logo_facebook.png" alt="logo" width={30} height={30} />
                            </Link>
                            <Link target="_blank" href="https://zalo.me/0365190188" className="w-8 h-8">
                                <Image src="/images/logozalo.png" alt="logo" width={30} height={30} />
                            </Link>
                            <Link target="_blank" href="https://www.youtube.com/@minimalieltswithluna901" className="w-8 h-8 hover:border-b-2 m-1.5">
                                <Image src="/images/logo_youtube.png" alt="logo" width={30} height={30} />
                            </Link>
                            <Link target="_blank" href="https://www.tiktok.com" className="w-8 h-8 hover:border-b-2">
                                <Image src="/images/logotiktok.png" alt="logo" width={30} height={30} />
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#000F30] text-[16px]">Danh mục</h3>
                        {menu?.map((item) => (
                            <div key={item?.url}>

                                <Link href={item?.url} className={pathname === `${item?.url}` ? 'text-[#000F30] text-[16px] hover:opacity-100 font-normal' : "text-[#282B27]"}>{item?.name}</Link>
                                {/* <Link href="/aboutus" className="text-[#000F30] text-[16px] hover:opacity-100 font-normal">Về chúng tôi</Link>
            <Link href="/class" className="text-[#000F30] text-[16px] hover:opacity-100 font-normal">Lớp học</Link>
            <Link href="/library" className="text-[#000F30] text-[16px] hover:opacity-100 font-normal">Thư viện</Link>
            <Link href="/news&blog" className="text-[#000F30] text-[16px] hover:opacity-100 font-normal">News & Blog</Link> */}
                            </div>))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-[#000F30] text-[16px] leading-6 text-justify">Địa chỉ:</h3>
                        <div className="overflow-hidden max-w-full w-full md:w-[350px] md:h-[264px] h-[200px]">
                            <iframe
                                className="h-full w-full outline-0"
                                src="https://www.google.com/maps/embed/v1/place?q=Park+5+Times+City&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                            </iframe>
                        </div>
                    </div>
                </div>

                <div className="w-full mt-12">
                    <Separator className="bg-[#E4E7EC]" />
                    <h3 className="text-[#514F4F] text-[14px] mt-4">© COPYRIGHT 2024 - Minimal English</h3>
                </div>
            </div>
        </footer>
    );
};
