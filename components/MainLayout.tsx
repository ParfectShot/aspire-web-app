"use client"

import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import { usePathname, useRouter } from "next/navigation"
import Sidebar from "@/components/Sidebar"
import HomeIcon from "@/assets/Home.svg"
import CardsIcon from "@/assets/Card.svg"
import PaymentsIcon from "@/assets/Payments.svg"
import CreditIcon from "@/assets/Credit.svg"
import SettingsIcon from "@/assets/Account.svg"
import React from "react"

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (isMobile) {
      document.body.classList.add('is-mobile')
    } else {
      document.body.classList.remove('is-mobile')
    }
  }, [isMobile])

  const mobileMenuItems = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Cards", icon: CardsIcon, href: "/cards" },
    { name: "Payments", icon: PaymentsIcon, href: "/payments" },
    { name: "Credit", icon: CreditIcon, href: "/credit" },
    { name: "Profile", icon: SettingsIcon, href: "/settings" },
  ]

  const isActiveRoute = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <div className={`flex min-h-screen`}>
      {isClient && !isMobile && <Sidebar />}
      
      <div className="flex-1 flex h-screen overflow-y-scroll">
        {children}
      </div>

      {isClient && isMobile && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2">
          <div className="flex justify-around">
            {mobileMenuItems.map((item) => (
              <button
                key={item.name}
                className="flex flex-col items-center gap-1 p-2"
                onClick={() => router.push(item.href)}
                aria-label={item.name}
              >
                <img 
                  src={item.icon.src} 
                  alt={item.name} 
                  className={`w-6 h-6 ${isActiveRoute(item.href) ? "opacity-100" : "opacity-40"}`}
                  style={{ 
                    filter: isActiveRoute(item.href) 
                      ? "brightness(0) saturate(100%) invert(69%) sepia(100%) saturate(469%) hue-rotate(88deg) brightness(118%) contrast(119%)" 
                      : "brightness(0) saturate(100%) invert(60%) sepia(8%) saturate(15%) hue-rotate(314deg) brightness(89%) contrast(84%)"
                  }}
                />
                <span className={`text-xxs ${isActiveRoute(item.href) ? "text-aspire-green" : "text-gray-400"}`}>
                  {item.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
} 