"use client"

import type { Card } from "@/types"
import type { StaticImageData } from "next/image"
import { useApp } from "@/contexts/AppContext"
import FreezeIcon from "@/assets/Freeze card.svg"
import SpendLimitIcon from "@/assets/Set spend limit.svg"
import GPayIcon from "@/assets/GPay.svg"
import ReplaceIcon from "@/assets/Replace card.svg"
import CancelIcon from "@/assets/Deactivate card.svg"

interface ActionButtonProps {
  action: {
    id: string
    label: string
    icon: StaticImageData
  }
  onClick: () => void
}

function ActionButton({ action, onClick }: ActionButtonProps) {
  return (
    <button
      className="flex flex-col items-center gap-2 p-1 rounded-xl hover:bg-white transition-colors"
      onClick={onClick}
    >
      <div className="w-8 md:w-12 h-8 md:h-12 bg-action-blue-light text-action-blue rounded-full flex items-center justify-center">
        <img src={action.icon.src} alt={action.label} className="w-6 h-6" />
      </div>
      <span className="text-[13px] text-center text-aspire-blue leading-[14px]">{action.label}</span>
    </button>
  )
}

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
    },
    {
      id: "spend-limit",
      label: "Set spend limit",
      icon: SpendLimitIcon,
    },
    { id: "gpay", label: "Add to GPay", icon: GPayIcon },
    { id: "replace", label: "Replace card", icon: ReplaceIcon },
    { id: "cancel", label: "Cancel card", icon: CancelIcon },
  ]

  const handleAction = (actionId: string) => {
    if (actionId === "freeze") {
      dispatch({ type: "TOGGLE_FREEZE", payload: { cardId: card.id } })
    }
    // Add other action handlers as needed
  }

  return (
    <div className="bg-aspire-light-blue-bg rounded-t-2xl md:rounded-2xl py-[20px]">
      <div className="grid grid-cols-5 gap-4">
        {actions.map((action) => (
          <ActionButton
            key={action.id}
            action={action}
            onClick={() => handleAction(action.id)}
          />
        ))}
      </div>
    </div>
  )
}
