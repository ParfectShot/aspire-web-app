"use client"

import { useApp } from "@/contexts/AppContext"
import { formatCurrency } from "@/lib/utils"
import AspireLogo from "@/assets/Logo.svg"
import PlusIcon from "@/assets/box.svg"

interface MobileHeaderProps {
  onNewCardClick: () => void
}

export default function MobileHeader({ onNewCardClick }: MobileHeaderProps) {
  const { state } = useApp()

  return (
    <header className="px-6 py-8 text-white">
      <div className="flex justify-between items-start mb-6">
        <h1 className="text-sm">Account balance</h1>
        <img src={AspireLogo.src} alt="Aspire Logo" className="w-[84px] h-[24px]" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-aspire-green text-white px-3 py-1 rounded text-[13px] font-medium leading-4">S$</div>
          <span className="text-2xl font-bold">
            {formatCurrency(state.accountBalance).replace("$", "").trim()}
          </span>
        </div>
        <button
          className="bg-transparent text-[#23CEFD] text-sm font-bold px-3 py-2 rounded-md hover:bg-opacity-90 transition-colors flex items-center gap-2"
          onClick={onNewCardClick}
        >
          <img src={PlusIcon.src} alt="Plus" className="w-4 h-4" />
          New card
        </button>
      </div>
    </header>
  )
} 