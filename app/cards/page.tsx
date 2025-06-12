"use client"

import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import DesktopCardsPage from "@/components/pages/DesktopCardsPage"
import MobileCardsPage from "@/components/pages/MobileCardsPage"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function CardsPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  return isMobile ? <MobileCardsPage /> : <DesktopCardsPage />
} 