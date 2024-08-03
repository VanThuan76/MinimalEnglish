import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon, MailIcon } from "lucide-react";
import {Link} from "@/navigation";
import Image from "next/image";
import { PhoneIcon } from "lucide-react";
import FacebookIcon from "@/components/icons/facebook-icon";
import MessengerIcon from "@/components/icons/messenger-icon";
import ZaloIcon from "@/components/icons/Zalo-icon";
import YouTubeIcon from "@/components/icons/youtube-icon";



export const FooterSection = () => {
  return (
    <footer id="footer" className="bg-card border border-secondary w-full h-[525px] gap-12 py-[60px] px-[120px] bg-[#f2f4f7]">
  
        <div className="w-full h-[304px]">
        <div className="top-4 grid grid-cols-3">
     
          <div className="w-[504] h-[282px] gap-5">
            <Link href="#" className="flex font-bold items-center">
            <Image src='/images/logo.png'
            alt='logo'
            width={98}
            height={98}
            />
            </Link>
            
            <div className="w-[190px] h-[24px] gap-3 ">
           
               <Link href="#" className="text-black item-center flex flex-row hover:opacity-100">
                <PhoneIcon className="w-[24px] h-[24px]"/>
                <h3 className="text-black i"> Hotline: 0936635052 </h3></Link>
            </div>

            <div className="w-[240px] h-[24px]">
              <Link href="#" className="text-black item-center flex flex-row hover:opacity-100">
              
              </Link>
              <Link
              target="_blank"
              href="https://www.facebook.com/messages/t/998301663696890"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            ></Link>
            </div>
            
            <div className="w-[240px] h-[48px] gap-3">
          
            <Link href="#" className="text-black tem-center flex flex-row hover:opacity-100">
            <MessengerIcon className="w-[24px] h-[24px]"/>
              Messenger:
              <Link target="_blank"
              href="https://www.facebook.com/messages/t/998301663696890"
              className="text-black transition-all border-primary hover:border-b-2 ml-1"
            >Ieltsfocusmode</Link>
              </Link>
                     
            </div>
            <div className="w-[315px] h-[48px] gap-3">
              <Link href="#" className="text-black tem-center flex flex-row hover:opacity-100">
              <MailIcon className="w-[24px] h-[24px] "/>
                Email: tuvan@ielts-nguyenhuyen.com
              </Link>
              {/* <Link
              target="_blank"
              href="tuvan@ielts-nguyenhuyen.com"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >tuvan@ielts-nguyenhuyen.com</Link> */}
            </div>
            <div className="w-[112px] h-[32px] gap-2 tem-center flex flex-row">
     
            <Link
              target="_blank"
              href="https://www.facebook.com/hangngaluna190188"
              className="text-blue-600 hover:border-b-2 ml-1"
            ><FacebookIcon /></Link>
             <Link
              target="_blank"
              href="https://zalo.me/0365190188"
              className="text-blue-600  hover:border-b-2 ml-1"
            ><ZaloIcon /></Link>
             <Link
              target="_blank"
              href="https://www.youtube.com/@minimalieltswithluna901"
              className="text-red-600  hover:border-b-2 ml-1"
            ><YouTubeIcon /></Link> 
       
            </div>
          </div>
                     
          <div className="w-[94px] h-[172px] gap-[16px] flex flex-col justify-center text-center">
            <h3 className="font-bold text-black">Danh mục</h3>
            <div>
              <Link href="/aboutus" className="text-black hover:opacity-100">
                Về chúng tôi
              </Link>
            </div>

            <div>
              <Link href="/class" className="text-black hover:opacity-100">
                Lớp học
              </Link>
            </div>

            <div>
              <Link href="/Library" className="text-black hover:opacity-100">
                Thư viện
              </Link>
            </div>
            
            <div>
              <Link href="News & Blog" className="text-black hover:opacity-100">
                News & Blog
              </Link>
            </div>
          </div>
               
          <div className="w-[350px] h-[304px] gap-4">
            <h3 className="font-bold text-black">Địa chỉ:</h3>
            <div className="overflow-hidden max-w-full w-[350px] h-[264px]">
              <div 
                id="my-map-display" 
                className="h-full w-full max-w-full"
              >
                <iframe 
                  className="h-full w-full outline-0" 
                  src="https://www.google.com/maps/embed/v1/place?q=Park+5+Times+City&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8">
                </iframe>
              </div>
              <a className="google-map-code-enabler" href="https://www.bootstrapskins.com/themes" id="get-data-for-embed-map">
                premium bootstrap themes
              </a>
              <style>
                #my-map-display .text-marker{}.map-generator max-width: 100%; max-height: 100%; background: none;
              </style>
            </div>
          </div>
        </div>
         
          <div className="w-[1200px] h-[53px] gap-8 py-8 ">
          <h3 className="text-black">
            &copy; COPYRIGHT 2024, - Minimal English
                         
          </h3>
        </div>
      </div>
    </footer>
  );
};
