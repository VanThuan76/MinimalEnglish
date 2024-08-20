'use client'

import React from "react";
import LessonList from "@/app/[locale]/(home)/library/_sections/Lesson/LessonList";
import { GlobalStateProvider } from "@/components/hooks/GlobalStateContext.tsx";
import { NavbarLesson } from "@/components/layout/Navbarlesson";
import { Navbardocument } from "@/components/layout/Navbardocument";
import DocumentList from "@/app/[locale]/(home)/library/_sections/Document/DocumentList";

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
