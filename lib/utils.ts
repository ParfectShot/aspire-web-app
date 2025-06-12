export function generateCardNumber(): string {
  const segments = []
  for (let i = 0; i < 4; i++) {
    segments.push(Math.floor(1000 + Math.random() * 9000).toString())
  }
  return segments.join("")
}

export function generateExpiryDate(): string {
  const currentYear = new Date().getFullYear()
  const futureYear = currentYear + Math.floor(Math.random() * 5) + 1
  const month = Math.floor(Math.random() * 12) + 1
  return `${month.toString().padStart(2, "0")}/${futureYear.toString().slice(-2)}`
}

export function generateCVV(): string {
  return Math.floor(100 + Math.random() * 900).toString()
}

export function formatCardNumber(cardNumber: string, showFull = false): string {
  if (showFull) {
    return cardNumber.replace(/(.{4})/g, "$1 ").trim()
  }
  return "•••• •••• •••• " + cardNumber.slice(-4)
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-SG", {
    style: "currency",
    currency: "SGD",
    minimumFractionDigits: 0,
  }).format(Math.abs(amount))
}

export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
