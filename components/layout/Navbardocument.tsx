import { Carousel, CarouselContent } from '@/components/ui/carousel';
import { Separator } from '@/components/ui/separator';
import clsx from 'clsx';
import { useGetNavbarDocument } from '@/schema/services/Library/navbarDocument';
import { useTranslations } from 'next-intl';
import { useAppDispatch, useAppSelector } from '@/components/hooks/useRedux';
import { setActiveDocument } from '@/lib/stores/appSlice';
import { Button } from '@/components/ui/button';

export const Navbardocument = () => {
  const {data: document, isLoading} = useGetNavbarDocument();
  const dispatch = useAppDispatch();
  const document_type_id = useAppSelector(state => state.activeDocument);
  const t = useTranslations();
  
  if(isLoading) return <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]"></div>;

  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Tài liệu</h1>
      <div className="lg:flex block justify-between mb-5">
        {/* desktop */}
        <div className="hidden lg:flex flex-row justify-between items-center w-[760px]">                    
          {document && document.map((item: any) => (
            <Button
              onClick={() => {
                dispatch(setActiveDocument(item?.id));
              }}
              key={item.order}
              className={document_type_id === item.id ? 'text-sm px-2 font-bold text-[#BE5C59] bg-transparent' : 'text-base px-2 text-[#514F4F] hover:underline bg-transparent'}>
              {item?.name}
            </Button>
          ))}
        </div>

        {/* mobile */}
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="hidden [@media(max-width:1000px)]:flex grid-col-5 w-full mb-4"
        >
          <CarouselContent>              
            {document && document.map((item: any) => (
              <Button
                onClick={() => {
                  dispatch(setActiveDocument(item?.id));
                }}
                key={item.value}
                className={clsx('text-base text-[#000F30] flex-[0_0_auto] mx-2', document_type_id === item.id ? 'font-bold text-[#BE5C59] bg-transparent' : 'hover:underline bg-transparent')}
              >
                {item?.name}
              </Button>
            ))}
          </CarouselContent>
        </Carousel>          
      </div>
      <Separator className="flex bg-[#D0D5DD] mt-5"/>
    </div>
  );
};
