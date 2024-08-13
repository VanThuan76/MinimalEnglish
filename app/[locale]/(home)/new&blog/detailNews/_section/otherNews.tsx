import { ListNews } from "@/app/[locale]/type"
import { SmNews } from "@/components/ui/smnews"

export const OtherNews: React.FC<{otherNews: ListNews[]}> = ({otherNews}) => {
  return (
    <section className="px-[16px] md:px-[80px] bg-white">
        <h2 className="text-[32px] text-black font-semibold mb-8">Bài viết liên quan</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-top">
        {otherNews.map(({title,description,image,publishInfor,tag,href}, index) => (
          <div key={index} className={`${(otherNews.length % 3 === 1 && index + 1 === otherNews.length) && "xl:col-[2]"}`}>
            <SmNews title={title} description={description} image={image} publishInfor={publishInfor} tag={tag} href={href}/>
          </div>
        ))}
      </div>
    </section>
  )
}