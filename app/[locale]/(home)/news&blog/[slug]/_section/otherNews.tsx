
import { SmNews } from "@/components/ui/smnews"
import { useGetRelated } from "@/schema/services/news&blog/related"
import { useTranslations } from "next-intl"

export const OtherNews = ({id}: {id: number}) => {
  const t = useTranslations()
  const {data: related, isLoading} = useGetRelated({category_id: id, id: id})
  if(isLoading) return <section className="px-[16px] md:px-[80px] bg-white"></section>
  const tag = ["tips", "ielts News", "ME News", "faq"]
  
  return (
    <section className="px-[16px] md:px-[80px] bg-white">
        <h2 className="text-[32px] text-black font-semibold mb-8">{t("related")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-top">
        {related.map((item: any, index: number) => (
          <div key={index}>
            <SmNews title={item.title} description={item.description} image={item.image} created_at={item.created_at} read_time={item.read_time} tag={tag[item.news_category_id - 1]} href={item.slug}/>
          </div>
        ))}
      </div>
    </section>
  )
}