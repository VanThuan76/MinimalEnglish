import { IeltsNews } from "@/app/[locale]/type";
import { SmNews } from "@/components/ui/smnews";

export const ListNews: React.FC<{ieltsNews: IeltsNews[]}> = ({ieltsNews}) => {
  return (
    <section className="px-[16px] md:px-[80px] py-12 md:py-16 bg-white">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 place-items-top">
        {ieltsNews.map(({title,description,image,publishInfor,tag }, index) => (
          <div key={index} className={`${(ieltsNews.length % 3 === 1 && index + 1 === ieltsNews.length) && "xl:col-[2]"}`}>
            <SmNews title={title} description={description} image={image} publishInfor={publishInfor} tag={tag} />
          </div>
        ))}
      </div>
    </section>
  );
};
