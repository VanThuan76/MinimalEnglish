import { ListNews } from "@/app/[locale]/type";
import { SmNews } from "@/components/ui/smnews";

export const Tips: React.FC<{tips: ListNews[]}> = ({tips}) => {
  return (
    <section id="tips" className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-top">
        {tips.map(({title,description,image,publishInfor,tag,href}, index) => (
          <div key={index} className={`${(tips.length % 3 === 1 && index + 1 === tips.length) && "xl:col-[2]"}`}>
            <SmNews title={title} description={description} image={image} publishInfor={publishInfor} tag={tag} href={href}/>
          </div>
        ))}
      </div>
    </section>
  );
};
