"use client"

import { useState } from "react"
import Card from "@/components/Card"
import CardActions from "@/components/CardActions"
import AddCardModal from "@/components/AddCardModal"
import TransactionList from "@/components/TransactionList"
import { useApp } from "@/contexts/AppContext"
import { useMediaQuery } from "@/hooks/useMediaQuery"
import PlusIcon from "@/assets/box.svg"
import { formatCurrency } from "@/lib/utils"
import CardDetails from "@/components/CardDetails"

export default function DesktopCardsPage() {
  const { state, dispatch } = useApp()
  const [isAddCardModalOpen, setIsAddCardModalOpen] = useState(false)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const currentCard = state.cards[state.currentCardIndex]

  const toggleShowCardNumber = () => {
    dispatch({ type: "TOGGLE_SHOW_CARD_NUMBER" })
  }

  const nextCard = () => {
    const nextIndex = state.currentCardIndex < state.cards.length - 1 ? state.currentCardIndex + 1 : 0
    dispatch({ type: "SET_CURRENT_CARD_INDEX", payload: nextIndex })
  }

  const prevCard = () => {
    const prevIndex = state.currentCardIndex > 0 ? state.currentCardIndex - 1 : state.cards.length - 1
    dispatch({ type: "SET_CURRENT_CARD_INDEX", payload: prevIndex })
  }

  return (
    <div className="flex-1 px-[60px] py-14">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className={`text-xl md:text-sm text-white md:text-aspire-text-gray mb-2`}>
            {isMobile ? "Account balance" : "Available balance"}
          </h1>
          <div className="flex items-center gap-3">
            <div className="bg-aspire-green text-white px-3 py-1 rounded text-[13px] font-medium leading-4">S$</div>
            <span className={`md:text-[26px] md:leading-4 font-bold text-white md:text-aspire-text-gray`}>
              {formatCurrency(state.accountBalance).replace("$", "").trim()}
            </span>
          </div>
        </div>
        <button
          className="bg-[#325BAF] text-white text-[13px] leading-[18px] px-3 py-[10px] rounded-sm hover:bg-opacity-90 transition-colors flex items-center gap-2"
          onClick={() => setIsAddCardModalOpen(true)}
        >
          <img src={PlusIcon.src} alt="Plus" className="w-4 h-4" />
          New card
        </button>
      </div>

      <div className="flex gap-8 mb-[20px]">
        <button
          className={`pb-2 md:text-sm ${state.activeTab === "my-cards" ? "border-b-2 border-[#23CEFD]" : `text-white md:text-gray-500`}`}
          onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: "my-cards" })}
        >
          My debit cards
        </button>
        <button
          className={`pb-2 md:text-sm ${state.activeTab === "company-cards" ? "border-b-2 border-[#23CEFD]" : `text-white md:text-gray-500`}`}
          onClick={() => dispatch({ type: "SET_ACTIVE_TAB", payload: "company-cards" })}
        >
          All company cards
        </button>
      </div>

      <div className="flex gap-6 shadow-[0_2px_12px_rgba(0,0,0,0.1)] border-2 border-[#FCFCFC] rounded-lg overflow-hidden px-[60px] py-[40px]">
        <div className="w-1/2 relative pt-9">
          <div className="flex justify-end mb-3 absolute top-0 right-0">
            <button
              className="flex items-center gap-2 text-aspire-green hover:text-opacity-80 transition-colors"
              onClick={toggleShowCardNumber}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
              <span className="text-xs">{state.showCardNumber ? "Hide" : "Show"} card number</span>
            </button>
          </div>

          {state.cards.length > 0 ? (
            <>
              <div className="relative mb-8">
                <div className="flex justify-center">
                  <Card card={state.cards[state.currentCardIndex]} isActive={true} showCardNumber={state.showCardNumber} />
                </div>

                {state.cards.length > 1 && (
                  <>
                    <div className="flex justify-center mt-4 gap-2">
                      {state.cards.map((_, index) => (
                        <button
                          key={index}
                          className={`w-2 h-2 rounded-full ${index === state.currentCardIndex ? "bg-aspire-green w-4" : "bg-gray-300"}`}
                          onClick={() => dispatch({ type: "SET_CURRENT_CARD_INDEX", payload: index })}
                        />
                      ))}
                    </div>

                    <button
                      className="absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                      onClick={prevCard}
                      aria-label="Previous Card"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                      </svg>
                    </button>

                    <button
                      className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-shadow"
                      onClick={nextCard}
                      aria-label="Next Card"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                      </svg>
                    </button>
                  </>
                )}
              </div>

              {currentCard && <CardActions card={currentCard} />}
            </>
          ) : (
            <div className="text-center py-12">
              <p className={`${isMobile ? "text-white" : "text-gray-500"} mb-4`}>No cards available</p>
              <button
                className="bg-aspire-green text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
                onClick={() => setIsAddCardModalOpen(true)}
              >
                Add your first card
              </button>
            </div>
          )}
        </div>
        <div className="w-1/2 flex flex-col gap-6">
          <CardDetails />
          <TransactionList />
        </div>
      </div>

      <AddCardModal isOpen={isAddCardModalOpen} onClose={() => setIsAddCardModalOpen(false)} />
    </div>
  )
} 