import { axiosInstance } from "@/lib/api"
import { useQuery } from "@tanstack/react-query"
import { useLocale } from "next-intl"


export const useGetTeachermethod_HL = () => {
    const locale = useLocale ()
    return useQuery({
        queryKey: ['secitonTeachermethod_HL'],
        queryFn: () => axiosInstance.post<any>('/component/get-by-section', {language: locale, section_id: 9}),
        select(data){
            return data.data        
        },
    })    
}
