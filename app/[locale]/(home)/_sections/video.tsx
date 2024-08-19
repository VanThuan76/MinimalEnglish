"use client"

import { useGetVideo } from "@/schema/services/home/video"

export const Video = () => {
  const {data: videoId, isLoading} = useGetVideo()
  if(isLoading) return <section className="px-[16px] md:px-[80px] h-[400px] py-12 md:py-16 bg-white"></section>
  
  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
      <h2 className="text-center text-3xl font-bold text-black mb-6">video</h2>
      <div className="relative pb-[56.25%] h-0 overflow-hidden max-w-full bg-black border-none">
        <iframe 
          className="absolute top-0 left-0 w-full h-full" 
          src={`https://www.youtube.com/embed/${videoId.en_description || videoId.vi_description}`} 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </section>
  )
}

