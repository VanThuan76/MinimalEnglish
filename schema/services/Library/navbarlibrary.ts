import { axiosInstance } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";
import { useLocale } from "next-intl";

interface Section {
  id: number;
  created_at: string;
  updated_at: string;
  order: number;
  status: number;
  name: string;
  description: string | null;
  image: string;
}

export const useGetNavbarLibrary = () => {
  const locale = useLocale();
  return useQuery({
    queryKey: ['sectionNavbarLibrary'],
    queryFn: () => axiosInstance.post<{ statusCode: number; data: Section[] }>('/lecture-type/all', { language: "en" }),
    select(data) {
      return data.data;
    },
  });
};
