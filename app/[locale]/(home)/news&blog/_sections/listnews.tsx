import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { SmNews } from "@/components/ui/smnews";

export const LiNews = (data: any) => {
  const {state} = useGlobalState()
  
  const filterLiNews = data.liNews.filter((item: any) => item.title.toLowerCase().includes(state.title.toLowerCase()))
  const tag = ["tips", "ielts News", "ME News", "faq"]
  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-top">
        {filterLiNews.length > 0 
          ? filterLiNews.map((item: any, index: number) => (
            <div key={index}>
              <SmNews title={item.title} description={item.description} image={item.image} read_time={item.read_time} created_at={item.created_at} tag={tag[item.news_category_id - 1]} href={item.slug}/>
            </div>
          ))
          : <div className="">No results found</div>
        }
      </div>
    </section>
  );
}