"use client"

import type { Card } from "@/types"
import { useApp } from "@/contexts/AppContext"
import FreezeIcon from "@/assets/Freeze card.svg"
import SpendLimitIcon from "@/assets/Set spend limit.svg"
import GPayIcon from "@/assets/GPay.svg"
import ReplaceIcon from "@/assets/Replace card.svg"
import CancelIcon from "@/assets/Deactivate card.svg"

interface CardActionsProps {
  card: Card
}

export default function CardActions({ card }: CardActionsProps) {
  const { dispatch } = useApp()

  const actions = [
    {
      id: "freeze",
      label: card.isFrozen ? "Unfreeze card" : "Freeze card",
      icon: FreezeIcon,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "spend-limit",
      label: "Set spend limit",
      icon: SpendLimitIcon,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "gpay",
      label: "Add to GPay",
      icon: GPayIcon,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "replace",
      label: "Replace card",
      icon: ReplaceIcon,
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: "cancel",
      label: "Cancel card",
      icon: CancelIcon,
      color: "bg-blue-100 text-blue-600",
    },
  ]

  const handleAction = (actionId: string) => {
    if (actionId === "freeze") {
      dispatch({ type: "TOGGLE_FREEZE", payload: { cardId: card.id } })
    }
    // Add other action handlers as needed
  }

  return (
    <div className="bg-[#EDF3FF] rounded-t-2xl md:rounded-2xl py-[20px]">
      <div className="grid grid-cols-5 gap-4">
        {actions.map((action) => (
          <button
            key={action.id}
            className="flex flex-col items-center gap-2 p-1 rounded-xl hover:bg-white transition-colors"
            onClick={() => handleAction(action.id)}
          >
            <div
              className={`w-8 md:w-12 h-8 md:h-12 ${action.color} rounded-full flex items-center justify-center`}
            >
              <img src={action.icon.src} alt={action.label} className="w-6 h-6" />
            </div>
            <span className="text-[13px] text-center text-[#0C365A] leading-[14px]">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
