import { NewsAndBlog } from "@/app/[locale]/(home)/new&blog/_sections/newsAndBlog"
import { getData } from "@/app/[locale]/(home)/page"
import { Data } from "@/app/[locale]/type"

export default async function Page(){
  const data: Data = await getData()
  return <NewsAndBlog data={data}/>
}
