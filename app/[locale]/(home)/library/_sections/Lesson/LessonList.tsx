import React, { useEffect } from "react";
import LectureItem from "@/app/[locale]/(home)/library/_sections/Lesson/LessonItem";
import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { useGetlecture } from "@/schema/services/Library/lesson";


type LessonListProps = {  
    
};


const LessonList: React.FC<LessonListProps> = () => {
    const {state, setState} = useGlobalState()    
    const {data : lecture, isLoading } = useGetlecture({page: 1, lecture_type_id: state.value ,size: 3});
    if ( isLoading) return <div></div>; 
    console.log ('document:', document)
    console.log ( state.order )

    
    return (
        <section className="bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FDF6EB]">
                {lecture?.map((item: any, index: number ) => (
                    <LectureItem
                        key={index}
                        title={item.title}
                        image={item.image}
                        view={item.viewer}
                        time={item.created_at}
                        link={item.associcate_link}
                    />
                ))}
            </div>
        </section>
    );
};

export default LessonList;
