'use client'

import { Navbardocument } from "@/components/layout/Navbardocument";
import { NavbarLibrary } from "@/components/layout/Navbarlibrary";
import { Children } from "react";


export default function Library() {   
    
    return ( 
        <>                
        <section className='bg-[#FDF6EB] px-[0px] md:px-[80px] pt-3 md:pt-10'>   
            <NavbarLibrary /> 
                                              
            <Navbardocument />
            <div className="w-full h-[120px] bg-[#FDF6EB]"></div>                
        </section>
        </>
    );
}