"use client"

import React from "react"
import type { Card as CardType } from "@/types"
import { formatCardNumber } from "@/lib/utils"
import AspireLogo from "@/assets/Aspire Logo-1.svg"

interface CardProps {
  card: CardType
  isActive?: boolean
  showCardNumber: boolean
}

const Card = React.memo(function Card({ card, isActive = false, showCardNumber }: CardProps) {
  return (
    <div className="relative w-[270px] md:w-[366px] mx-auto">
      <div
        className={`bg-aspire-green rounded-2xl p-6 text-white shadow-xl transform transition-all duration-300 ${
          card.isFrozen ? "opacity-50" : ""
        } ${isActive ? "scale-105" : ""}`}
      >
        <div className="flex justify-end md:mb-4">
          <img src={AspireLogo.src} alt="Aspire Logo" className="w-[84px] h-[24px]" />
        </div>

        <div className="mb-4 md:mb-8">
          <h3 className="text-lg md:text-2xl font-medium">{card.name}</h3>
        </div>

        <div className="mb-4">
          <p className="text-base md:text-lg font-mono">{formatCardNumber(card.cardNumber, showCardNumber)}</p>
        </div>

        <div className="flex justify-between items-end">
          <div className="flex gap-4 md:gap-8">
            <div>
              <p className="text-xs opacity-80">Thru: {card.expiryDate}</p>
            </div>
            <div>
              <p className="text-xs opacity-80">CVV: {showCardNumber ? card.cvv : "***"}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xl md:text-2xl font-bold">{card.cardType}</p>
          </div>
        </div>

        {card.isFrozen && (
          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl flex items-center justify-center">
            <div className="bg-white bg-opacity-20 rounded-lg px-3 py-1">
              <span className="text-sm font-medium">FROZEN</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
})

export default Card
