import { SubNavbar } from "@/components/layout/subNavbar";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <>
        
        <SubNavbar />
        {children}
    </>
  )
}
