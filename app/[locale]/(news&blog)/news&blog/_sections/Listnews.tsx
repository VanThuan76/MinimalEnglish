import { useTranslations } from "next-intl";
import { SmNews } from "@/components/ui/smnews";
import { useGetAllCategory } from "@/schema/services/allcategory";
import { useAppSelector } from "@/components/hooks/useRedux";
import { News } from "@/schema/services/allNews";

export const LiNews = ({ data }: { data: News[] }) => {
    let orderdata
    const t = useTranslations()
    const news_type_id = useAppSelector(state => state.activeNew)
    news_type_id > 0 ? orderdata = data.filter((item) => item.news_category_id === news_type_id) : orderdata = data
    const filterLiNews = orderdata
    const { data: category, isLoading } = useGetAllCategory()
    if (isLoading || !category) return <></>

    return (
        <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 place-items-top">
                {filterLiNews.length > 0
                    ? filterLiNews.map((item: any, index: number) => (
                        <div key={index} className="w-full">
                            <SmNews title={item.title} description={item.description} image={item.image} read_time={item.read_time} created_at={item.created_at} tag={category[item.news_category_id - 1].description} href={item.slug} />
                        </div>
                    ))
                    : <div className="">{t("notFound")}</div>
                }
            </div>
        </section>
    );
}
