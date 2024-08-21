"use client"

import React from "react";

import { Banner } from "@/app/[locale]/(home)/_sections/Banner";
import { AboutUs } from "@/app/[locale]/(home)/_sections/About_us";
import { Class } from "@/app/[locale]/(home)/_sections/Class";
import { WhyUs } from "@/app/[locale]/(home)/_sections/Why_us";
import { Video } from "@/app/[locale]/(home)/_sections/Video";

import { useSectionByPage } from "@/schema/services/common";
import { Feedback } from "@/components/layout/Feedback";


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
