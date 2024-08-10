import { Data, writing } from "@/app/[locale]/type";
import { getData } from "@/app/[locale]/(home)/page";
import { Writing } from "app/[locale]/(home)/library/_sections/writing";
import { title } from "process";

export default async function Library() {
    const data: Data = await getData();
    const res = await fetch('https://siuuuu-8f55.onrender.com/api/users');
    const data2: Data = await res.json();

    const writings: writing[] = data.library.writing;

    return (
        <section className='bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-10'>
            <div className="relative grid grid-cols-1 md:grid-cols-3 mt-5">
                {writings.map((writing, index) => (
                    <Writing
                        key={index}
                        title={writing.title}
                        image={writing.image}
                        view={writing.view}
                        time={writing.time}
                        link={writing.link}
                    />
                ))}
            </div>
        </section> 
       
    )
}
