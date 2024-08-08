import { IeltsNews, News_blog } from "@/app/[locale]/type";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CircleArrowRight } from 'lucide-react';
import Image from "next/image";

export const ListNews: React.FC<{ieltsNews: IeltsNews[]}> = ({ieltsNews}) => {
  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-top">
        {ieltsNews.map(({title,description,image,publishInfor,tag }, index) => (
          <div key={index} className={`${(ieltsNews.length % 3 === 1 && index + 1 === ieltsNews.length) && "xl:col-[2]"}`}>
            <div className='flex flex-col w-full justify-between gap-6'>
              <div className='relative w-full h-[200px] rounded-xl overflow-hidden'>
                <Image 
                    fill
                    style={{objectFit: "cover"}}
                    src={image}
                    alt="image"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

                <div className='w-full flex flex-col gap-3 text-black'>
                    <div className='w-full flex justify-between items-center'>
                        <Badge variant={'secondary'} className='p-2 rounded-lg bg-[#E4E7EC] text-black text-xs font-normal hover:text-white'>{tag}</Badge>
                        <div className='text-base font-normal'>{publishInfor}</div>
                    </div>
                
                    <div className=' text-2xl font-semibold leading-9 '>
                        {title}
                    </div>

                    <div className='text-base font-normal text-[#514F4F]'>
                        {description}
                    </div>

                    <button className='flex items-center gap-3 w-fit font-semibold text-[20px] bg-white text-[#000F30] px-0 group/arrow'>
                        Đọc bài 
                        <CircleArrowRight strokeWidth={1.5} size={20} className='group-hover/arrow:translate-x-2 transition-transform'/>
                    </button>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
