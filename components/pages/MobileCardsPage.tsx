"use client"

import { useState } from "react"
import MobileHeader from "@/components/mobile/MobileHeader"
import MobileCardCarousel from "@/components/mobile/MobileCardCarousel"
import MobileActionsDrawer from "@/components/mobile/MobileActionsDrawer"
import AddCardModal from "@/components/AddCardModal"
import { useApp } from "@/contexts/AppContext"

export default function MobileCardsPage() {
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false)
  const { state, dispatch } = useApp()

  return (
    <div className="bg-aspire-blue min-h-screen w-screen">
      <MobileHeader onNewCardClick={() => setIsAddCardModalOpen(true)} />
      
      <div className="px-6">
        <div className="flex gap-8 mb-4">
          <button
            className={`pb-2 text-sm ${state.activeTab === "my-cards" ? "border-b-2 border-white text-white" : "text-white/70"}`}
            onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: "my-cards" })}
          >
            My debit cards
          </button>
          <button
            className={`pb-2 text-sm ${state.activeTab === "company-cards" ? "border-b-2 border-white text-white" : "text-white/70"}`}
            onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: "company-cards" })}
          >
            All company cards
          </button>
        </div>
        
        <MobileCardCarousel />
      </div>

      <MobileActionsDrawer />

      <AddCardModal isOpen={isAddCardModalOpen} onClose={() => setIsAddCardModalOpen(false)} />
    </div>
  )
} 