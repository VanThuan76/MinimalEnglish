"use client"

import { Link } from '@/navigation'
import { usePathname } from 'next/navigation'

export const ShareZalo = () => {
  const pathname = usePathname()
  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={`https://zalo.me/share?url=${encodeURIComponent(pathname)}`}
      className="w-8 h-8 rounded-full border border-[#98A2B3] flex justify-center items-center"
    >
      <div className="text-black text-xs">
        Zalo
      </div>
    </Link>
  )
}
