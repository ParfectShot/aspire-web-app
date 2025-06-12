"use client"

import { usePathname, useRouter } from "next/navigation"
import AspireLogo from "@/assets/Aspire Logo.svg"
import HomeIcon from "@/assets/Home.svg"
import CardsIcon from "@/assets/Card.svg"
import PaymentsIcon from "@/assets/Payments.svg"
import CreditIcon from "@/assets/Credit.svg"
import SettingsIcon from "@/assets/Account.svg"

interface SidebarProps {
  onSelect?: (item: string) => void
}

export default function Sidebar({ onSelect }: SidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const menuItems = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Cards", icon: CardsIcon, href: "/cards" },
    { name: "Payments", icon: PaymentsIcon, href: "/payments" },
    { name: "Credit", icon: CreditIcon, href: "/credit" },
    { name: "Settings", icon: SettingsIcon, href: "/settings" },
  ]

  const handleSelect = (item: { name: string; href: string }) => {
    router.push(item.href)
    onSelect?.(item.name)
  }

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <div className="w-[340px] bg-aspire-blue text-white h-screen flex flex-col">
      <div className="p-12">
        <div className="flex items-center gap-2 mb-8">
          <img src={AspireLogo.src} alt="Aspire" className="w-[125px] h-[35px]" />
        </div>

        <p className="text-sm text-white opacity-30 mb-4">Trusted way of banking for 3,000+ SMEs and startups in Singapore</p>
      </div>

      <nav className="flex-1">
        {menuItems.map((item) => (
          <button
            key={item.name}
            className={`w-full flex items-center gap-3 px-12 py-4 text-left hover:bg-opacity-10 hover:bg-white transition-colors ${
              isActive(item.href) ? "bg-opacity-10 bg-white border-r-2 border-aspire-green" : ""
            }`}
            onClick={() => handleSelect(item)}
          >
            <img src={item.icon.src} alt={item.name} className="w-6 h-6" />
            <span className="leading-8">{item.name}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}
