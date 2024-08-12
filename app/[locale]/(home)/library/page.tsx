import { Data, document, Lesson } from "@/app/[locale]/type";
import { getData } from "@/app/[locale]/(home)/page";
import { Navbardocument } from "@/components/layout/Navbardocument";
import { Navbarlibrary } from "@/components/layout/Navbarlibrary";


export default async function Library() {
    const data: Data = await getData();
    const res = await fetch('https://siuuuu-8f55.onrender.com/api/users');
    const data2: Data = await res.json();
    
    return (                 
        <section className='bg-[#FDF6EB] px-[0px] md:px-[80px] pt-3 md:pt-10'>   
            <Navbarlibrary />                                       
            <Navbardocument />
            <div className="w-full h-[120px] bg-[#FDF6EB]"></div>                
        </section>
        
    );
}
