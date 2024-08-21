
import { SmNews } from "@/components/ui/smnews"
import { useGetAllCategory } from "@/schema/services/allcategory"
import { useGetRelated } from "@/schema/services/related" 
import { useTranslations } from "next-intl"

export const OtherNews = ({id}: {id: number}) => {
  const t = useTranslations()
  const {data: category} = useGetAllCategory()
  const {data: related} = useGetRelated({category_id: id, id: id})
  
  return (
    <section className="px-[16px] md:px-[80px] bg-white">
        <h2 className="text-[32px] text-black font-semibold mb-8">{t("related")}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-top">
        {related &&
        related?.map(({title, description, image, created_at,read_time, news_category_id, slug}) => (
          <div key={title}>
            <SmNews title={title} description={description} image={image} created_at={created_at} read_time={read_time} tag={category && category[news_category_id].description} href={slug}/>
          </div>
        ))}
      </div>
    </section>
  )
}