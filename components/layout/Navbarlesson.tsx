"use client";

import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Link } from "@/navigation";
import clsx from "clsx";
import { useRouter } from "@/navigation";
import { useGetNavbarLesson } from "@/schema/services/Library/navbarLesson";
import { useTranslations } from "next-intl";
import * as Tabs from '@radix-ui/react-tabs';
import React from 'react';
import { useGetlecture } from '@/schema/services/Library/lesson';
import LectureItem from '@/app/[locale]/(home)/library/_sections/Lesson/LessonItem';

export const NavbarLesson = () => {
  const { data: lessons, isLoading } = useGetNavbarLesson();
  const {state, setState} = useGlobalState()
  const {data : lecture, isLoading: isLoadingLecture } = useGetlecture({page: 1, lecture_type_id: state.value ,size: 3});
  const router = useRouter();
  const t = useTranslations();

  if (isLoading) return <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]"></div>;

  return (
    <div className="px-[16px] md:px-[80px] pt-3 md:pt-10 w-full bg-[#FDF6EB]">
      <h1 className="text-[32px] text-[#000F30] leading-[52px] mt-[40px] font-semibold mb-10">Bài Giảng</h1> 
      <div className="lg:flex justify-between mb-5">
        <Tabs.Root defaultValue="account">
          <Tabs.List>
            {
              lessons?.map((lesson: any, index: number) =>
                <Tabs.Trigger key={'lesson' + lesson.id} value={lesson.id} className={"text-black"}>{lesson.name}</Tabs.Trigger>
              )
            }
          </Tabs.List>
          <div>
            {
              lessons?.map((lesson: any, index: number) =>
                <Tabs.Content key={'tabs' + lesson.id} value={lesson.id}>
                  {lecture?.filter((e: any) => e.lecture_type_id === lessons.id)?.map((item: any, index: number ) => (
                    <LectureItem
                      key={'lesson_content' + item.id}
                      title={item.title}
                      image={item.image}
                      view={item.viewer}
                      time={item.created_at}
                      link={item.associcate_link}
                    />
                  ))}
                </Tabs.Content>
              )
            }
          </div>
        </Tabs.Root>
      </div>
      <Separator className="flex bg-[#D0D5DD] mt-5" />
    </div>
  );
};
