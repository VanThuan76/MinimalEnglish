"use client"

import { useGetComponent } from "@/schema/services/component"
import { useTranslations } from "next-intl"

export const Video = ({ data }: { data: any }) => {
    const t = useTranslations("home")
    const { data: videoId, isLoading } = useGetComponent({ section_id: data?.id, queryKey: "sectionVideo" })
    if (isLoading || !videoId) return <section className="py-[60px] px-[16px] md:px-[80px] bg-[#FDF6EB]"></section>

    return (
        <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
            <h2 className="text-center text-3xl font-bold text-black mb-6">{t("video")}</h2>
            <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black border-none">
                <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId[0].title}`} //Fix ??
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    )
}
