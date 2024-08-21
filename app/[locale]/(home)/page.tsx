"use client"

import React from "react";



import { useSectionByPage } from "@/schema/services/common";
import { Banner } from '@/app/[locale]/(home)/_sections/banner';
import { AboutUs } from '@/app/[locale]/(home)/_sections/about_us';
import { Class } from '@/app/[locale]/(home)/_sections/class';
import { Feedback } from '@/components/layout/feedback';
import { WhyUs } from '@/app/[locale]/(home)/_sections/why_us';
import { Video } from '@/app/[locale]/(home)/_sections/video';


export default function Home() {
    const { data: section, isLoading } = useSectionByPage(1)

    if (isLoading || !section) return <></>

    return (
        <React.Fragment>
            <Banner data={section[0]} />
            <AboutUs data={section[1]} />
            <Class />
            <Feedback />
            <WhyUs data={section[4]} />
            <Video data={section[5]} />
        </React.Fragment>
    );
}
