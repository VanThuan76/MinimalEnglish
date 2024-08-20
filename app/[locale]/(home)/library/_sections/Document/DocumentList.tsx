import React, { useEffect } from "react";
import DocumentItem from "@/app/[locale]/(home)/library/_sections/Document/DocumentItem";
import { useGlobalState } from "@/components/hooks/GlobalStateContext.tsx";
import { useGetDocuments } from "@/schema/services/Library/documents";


type DocumentListProps = {  
    
};


const DocumentList: React.FC<DocumentListProps> = () => {
    const {state, setState} = useGlobalState()    
    const {data : document, isLoading } = useGetDocuments({document_type_id: state.value ,size: 3});
    if ( isLoading) return <div></div>; 
    console.log ('document:', document)
    console.log ( state.order )

    
    return (
        <section className="bg-[#FDF6EB] px-[16px] md:px-[80px] pt-3 md:pt-14">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FDF6EB]">
                {document.map((item: any, index: number ) => (
                    <DocumentItem
                        key={index}
                        title={item.title}
                        downloaded={item.downloaded}
                        created_at={item.created_at}
                    />
                ))}
            </div>
        </section>
    );
};

export default DocumentList;
