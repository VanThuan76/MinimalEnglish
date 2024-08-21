"use client"

import { useTranslations } from "next-intl"

export const Video = ({data}: {data: any}) => {
  const t = useTranslations("home")
  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-black mb-6">{t("video")}</h2>
      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black border-none">
        <iframe 
          className="absolute top-0 left-0 w-full h-full" 
          src={`https://www.youtube.com/embed/${data?.description}`} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}