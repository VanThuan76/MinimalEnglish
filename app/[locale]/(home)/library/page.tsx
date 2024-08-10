import { Data, document, writing } from "@/app/[locale]/type";
import { getData } from "@/app/[locale]/(home)/page";
import { Writing } from "app/[locale]/(home)/library/_sections/writing";
import { Document } from "app/[locale]/(home)/library/_sections/document";
import { Navbardocument } from "@/components/layout/Navbardocument";
import { Navbarlibrary } from "@/components/layout/Navbarlibrary";

export default async function Library() {
    const data: Data = await getData();
    const res = await fetch('https://siuuuu-8f55.onrender.com/api/users');
    const data2: Data = await res.json();

    const writings: writing[] = data.library.writing;
    const document: document[] = data.library.document;

    return (
        
        <section className='bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-10'>
            <Navbarlibrary />
            <div className="relative grid grid-cols-1 md:grid-cols-3 bg-[#FDF6EB] rounded-lg gap-6 mt-16">
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

            <Navbardocument />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 bg-[#FDF6EB]">
                {document.map((document, index) => (
                    <Document
                        key={index}
                        title={document.title}                       
                        downloads={document.downloads}
                        time={document.time}                        
                    />
                ))}
                <div className="w-full h-[80px] bg-[#FDF6EB]"></div>
            </div>
        </section> 

    )
}
