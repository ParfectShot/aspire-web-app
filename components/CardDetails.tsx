"use client"

import { useApp } from "@/contexts/AppContext"
import { formatCurrency } from "@/lib/utils"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion"
import CardDetailsIcon from "@/assets/Group 11889.svg"
import DownArrowIcon from "@/assets/down-arrow.svg"

function CardDetailRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="text-xs text-aspire-text-secondary mb-2">{label}</p>
      <p className="text-sm font-semibold text-aspire-text-gray">{value}</p>
    </div>
  )
}

export default function CardDetails() {
  const { state } = useApp()
  const currentCard = state.cards[state.currentCardIndex]

  if (!currentCard) {
    return (
      <div className="bg-white rounded-lg min-w-[366px] border border-aspire-border p-6">
        <p className="text-aspire-text-secondary text-center">No card selected</p>
      </div>
    )
  }

  return (
    <Accordion type="single" collapsible className="bg-white rounded-lg w-full md:min-w-[366px]">
      <AccordionItem value="card-details" className="border border-aspire-border rounded-lg">
        <AccordionTrigger className="group flex justify-between items-center w-full p-6 rounded-lg bg-aspire-hover-blue hover:no-underline data-[state=open]:mb-6 [&>svg]:hidden">
          <h3 className="text-lg font-semibold text-aspire-blue flex items-center gap-2">
            <span>
              <img src={CardDetailsIcon.src} alt="Card Details" className="w-6 h-6" />
            </span>
            Card details
          </h3>
          <img
            src={DownArrowIcon.src}
            alt="Toggle"
            className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180"
          />
        </AccordionTrigger>
        <AccordionContent className="pb-0 pt-0">
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <CardDetailRow label="Card Holder Name" value={currentCard.name} />
              <CardDetailRow label="Card Type" value={currentCard.cardType} />
            </div>

            <CardDetailRow
              label="Card Number"
              value={
                <span className="font-mono tracking-wider">
                  {state.showCardNumber
                    ? currentCard.cardNumber.replace(/(.{4})/g, "$1 ").trim()
                    : "**** **** **** " + currentCard.cardNumber.slice(-4)}
                </span>
              }
            />

            <div className="grid grid-cols-2 gap-6">
              <CardDetailRow label="Expiry Date" value={currentCard.expiryDate} />
              <CardDetailRow
                label="CVV"
                value={
                  <span className="font-semibold">
                    {state.showCardNumber ? currentCard.cvv : "***"}
                  </span>
                }
              />
            </div>

            <div>
              <p className="text-xs text-aspire-text-secondary mb-2">Status</p>
              <div
                className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                  currentCard.isFrozen
                    ? "bg-status-red-light text-status-red"
                    : "bg-status-green-light text-status-green"
                }`}
              >
                {currentCard.isFrozen ? "Frozen" : "Active"}
              </div>
            </div>

            <div className="border-t border-aspire-border pt-4">
              <p className="text-xs text-aspire-text-secondary mb-2">Available Balance</p>
              <div className="flex items-center gap-2">
                <div className="bg-aspire-green text-white px-2 py-1 rounded text-xs font-medium">S$</div>
                <p className="text-lg font-bold text-aspire-text-gray">
                  {formatCurrency(state.accountBalance).replace("$", "").trim()}
                </p>
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
} 