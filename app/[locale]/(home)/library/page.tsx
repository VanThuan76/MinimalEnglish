'use client'

import DocumentList from "@/app/[locale]/(home)/library/_sections/Document/DocumentList";
import LessonList from "@/app/[locale]/(home)/library/_sections/Lesson/LessonList";
import { GlobalStateProvider } from "@/components/hooks/GlobalStateContext.tsx";
import { Navbardocument } from "@/components/layout/Navbardocument";
import { NavbarLesson } from "@/components/layout/Navbarlesson";

export default function Library() {   
    
    return ( 
        <>                     
            <GlobalStateProvider>
            <NavbarLesson /> 
            <LessonList />
            </GlobalStateProvider>
            <GlobalStateProvider>                                            
            <Navbardocument />
            <DocumentList />            
            </GlobalStateProvider>
            <div className="w-full h-[120px] bg-[#FDF6EB]"></div>                       
        </>
    );
}