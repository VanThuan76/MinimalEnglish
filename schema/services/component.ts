import { IBaseResponse } from '@/app/[locale]/type';
import { axiosInstance } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';
import { useLocale } from 'next-intl';

interface IComponent {
    id: number;
    image: null;
    image_2: null;
    image_3: null;
    image_4: null;
    image_5: null;
    image_6: null;
    image_7: null;
    section_id: number;
    created_at: string;
    updated_at: string;
    created_by: null;
    updated_by: null;
    order: number;
    status: number;
    title: string;
    content: string;
}

export const useGetComponent = ({ section_id, queryKey }: { section_id: number, queryKey: string }) => {
    const locale = useLocale()

    return useQuery({
        queryKey: ['component', queryKey, section_id],
        queryFn: () => axiosInstance.post<IBaseResponse<IComponent[]>>('/component/get-by-section', { language: locale, section_id: section_id }),
        select(data) {
            return data.data
        },
    })
}
