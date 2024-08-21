'use client';

import React from 'react';

import { GlobalStateProvider } from '@/components/hooks/GlobalStateContext.tsx';
import { NavbarLesson } from '@/components/layout/NavbarLesson';
import { Navbardocument } from '@/components/layout/NavbarDocument';

import DocumentList from '@/app/[locale]/(library)/library/_sections/Document/DocumentList';
import LessonList from '@/app/[locale]/(library)/library/_sections/Lesson/LessonList';

export default function Library() {

    return (
        <GlobalStateProvider>
            <NavbarLesson />
            <LessonList />
            <Navbardocument />
            <DocumentList />
            <div className="w-full h-[120px] bg-[#FDF6EB]"></div>
        </GlobalStateProvider>
    );
}
