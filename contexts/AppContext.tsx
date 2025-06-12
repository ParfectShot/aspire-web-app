"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import type { Card, AppState } from "@/types"
import { generateCardNumber, generateExpiryDate, generateCVV } from "@/lib/utils"
import HamleysIcon from "@/assets/file-storage.svg";
import FlightIcon from "@/assets/flights.svg";
import MegaphoneIcon from "@/assets/megaphone.svg";

export const ICON_BACKGROUND_COLORS = {
  HamleysIcon: "#009DFF1A",
  FlightIcon: "#00D6B51A", 
  MegaphoneIcon: "#F251951A",
} as const

type AppAction =
  | { type: "ADD_CARD"; payload: { name: string } }
  | { type: "TOGGLE_FREEZE"; payload: { cardId: string } }
  | { type: "TOGGLE_SHOW_CARD_NUMBER" }
  | { type: "SET_ACTIVE_TAB"; payload: "my-cards" | "company-cards" }
  | { type: "SET_CURRENT_CARD_INDEX"; payload: number }
  | { type: "LOAD_FROM_STORAGE"; payload: Partial<AppState> }

const initialState: AppState = {
  cards: [
    {
      id: "1",
      name: "Mark Henry",
      cardNumber: "1234567890123456",
      expiryDate: "12/20",
      cvv: "123",
      isFrozen: false,
      cardType: "VISA",
    },
    {
      id: "2",
      name: "Paritosh",
      cardNumber: "12348901234567",
      expiryDate: "12/30",
      cvv: "124",
      isFrozen: false,
      cardType: "VISA",
    },
  ],
  transactions: [
    {
      id: "1",
      merchant: "Hamleys",
      amount: 150,
      date: "20 May 2020",
      type: "credit",
      category: "shopping",
      icon: HamleysIcon,
      iconBackgroundColor: ICON_BACKGROUND_COLORS.HamleysIcon,
    },
    {
      id: "2",
      merchant: "Hamleys",
      amount: -150,
      date: "20 May 2020",
      type: "debit",
      category: "refund",
      icon: FlightIcon,
      iconBackgroundColor: ICON_BACKGROUND_COLORS.FlightIcon,
    },
    {
      id: "3",
      merchant: "Hamleys",
      amount: -150,
      date: "20 May 2020",
      type: "debit",
      category: "shopping",
      icon: MegaphoneIcon,
      iconBackgroundColor: ICON_BACKGROUND_COLORS.MegaphoneIcon,
    },
    {
      id: "4",
      merchant: "Hamleys",
      amount: -150,
      date: "20 May 2020",
      type: "debit",
      category: "shopping",
      icon: HamleysIcon,
      iconBackgroundColor: ICON_BACKGROUND_COLORS.HamleysIcon,
    },
  ],
  accountBalance: 3000,
  showCardNumber: false,
  activeTab: "my-cards",
  currentCardIndex: 0,
}

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "ADD_CARD":
      const newCard: Card = {
        id: Date.now().toString(),
        name: action.payload.name,
        cardNumber: generateCardNumber(),
        expiryDate: generateExpiryDate(),
        cvv: generateCVV(),
        isFrozen: false,
        cardType: Math.random() > 0.5 ? "VISA" : "MASTERCARD",
      }
      return {
        ...state,
        cards: [...state.cards, newCard],
      }

    case "TOGGLE_FREEZE":
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload.cardId ? { ...card, isFrozen: !card.isFrozen } : card,
        ),
      }

    case "TOGGLE_SHOW_CARD_NUMBER":
      return {
        ...state,
        showCardNumber: !state.showCardNumber,
      }

    case "SET_ACTIVE_TAB":
      return {
        ...state,
        activeTab: action.payload,
      }

    case "SET_CURRENT_CARD_INDEX":
      return {
        ...state,
        currentCardIndex: action.payload,
      }

    case "LOAD_FROM_STORAGE":
      return {
        ...state,
        ...action.payload,
      }

    default:
      return state
  }
}

const AppContext = createContext<{
  state: AppState
  dispatch: React.Dispatch<AppAction>
} | null>(null)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  useEffect(() => {
    const savedCards = localStorage.getItem("aspire-cards")
    const savedBalance = localStorage.getItem("aspire-balance")

    if (savedCards || savedBalance) {
      dispatch({
        type: "LOAD_FROM_STORAGE",
        payload: {
          ...(savedCards && { cards: JSON.parse(savedCards) }),
          ...(savedBalance && { accountBalance: JSON.parse(savedBalance) }),
        },
      })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("aspire-cards", JSON.stringify(state.cards))
    localStorage.setItem("aspire-balance", JSON.stringify(state.accountBalance))
  }, [state.cards, state.accountBalance])

  return <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}
