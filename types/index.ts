export interface Card {
  id: string
  name: string
  cardNumber: string
  expiryDate: string
  cvv: string
  isFrozen: boolean
  cardType: "VISA" | "MASTERCARD"
}

export interface Transaction {
  id: string
  merchant: string
  amount: number
  date: string
  type: "debit" | "credit"
  category: string
  icon: any
  iconBackgroundColor: string
}

export interface AppState {
  cards: Card[]
  transactions: Transaction[]
  accountBalance: number
  showCardNumber: boolean
  activeTab: "my-cards" | "company-cards"
  currentCardIndex: number
}
