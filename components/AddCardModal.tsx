"use client"

import type React from "react"

import { useState } from "react"
import { useApp } from "@/contexts/AppContext"

interface AddCardModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function AddCardModal({ isOpen, onClose }: AddCardModalProps) {
  const [cardName, setCardName] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { dispatch } = useApp()

  const handleClose = () => {
    setCardName("")
    setIsSubmitting(false)
    onClose()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!cardName.trim()) return

    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    dispatch({ type: "ADD_CARD", payload: { name: cardName.trim() } })

    setIsSubmitting(false)
    handleClose()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      role="dialog"
      aria-modal="true"
      tabIndex={-1}
      onKeyDown={handleKeyDown}
    >
      <div className="bg-white rounded-2xl p-6 w-full max-w-md" role="document">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-aspire-text-gray">Add New Card</h2>
          <button className="text-gray-400 hover:text-gray-600 text-2xl" onClick={handleClose} aria-label="Close modal">
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="cardName" className="block text-sm font-medium text-aspire-text-gray mb-2">
              Cardholder Name
            </label>
            <input
              id="cardName"
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="Enter cardholder name"
              className="w-full px-4 py-3 border border-aspire-border rounded-lg focus:ring-2 focus:ring-aspire-green focus:border-transparent outline-none"
              required
              disabled={isSubmitting}
            />
            <p className="text-xs text-aspire-text-secondary mt-1">
              Card number and expiry date will be generated automatically
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-3 border border-aspire-border text-aspire-text-gray rounded-lg hover:bg-aspire-gray transition-colors"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-3 bg-aspire-green text-white rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSubmitting || !cardName.trim()}
            >
              {isSubmitting ? "Adding..." : "Add Card"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
