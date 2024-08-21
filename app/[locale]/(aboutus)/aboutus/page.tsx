'use client';

import React from "react";
import BrandStory from "@/app/[locale]/(aboutus)/aboutus/_sections/BrandStory";
import Lectures from "@/app/[locale]/(aboutus)/aboutus/_sections/Lectures";

import { Misson } from "@/app/[locale]/(aboutus)/aboutus/_sections/Misson";
import { Vision } from "@/app/[locale]/(aboutus)/aboutus/_sections/Vision";
import { Highlight } from "@/app/[locale]/(aboutus)/aboutus/_sections/Highlights";

import { Feedback } from "@/components/layout/Feedback";
import { useSectionByPage } from "@/schema/services/common";

export default function AboutUs() {
    const { data: sections, isLoading } = useSectionByPage(2);

    if (isLoading) return <></>;

    return (
        <React.Fragment>
            <Misson data={sections?.[0]} />
            <Vision data={sections?.[1]} />
            <BrandStory data={sections?.[2]} />
            <Highlight data={sections?.[3]} />
            <Lectures data={sections?.[4]} />
            <Feedback />
        </React.Fragment>
    );
}
