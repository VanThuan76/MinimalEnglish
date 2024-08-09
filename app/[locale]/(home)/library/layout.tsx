import {Navbarlibrary} from "@/components/layout/Navbarlibrary"

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
        
        <Navbarlibrary />
        {children}
    </>
  )
}