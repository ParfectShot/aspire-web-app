"use client"

import { useApp } from "@/contexts/AppContext"
import { formatCurrency } from "@/lib/utils"
import DownArrowIcon from "@/assets/down-arrow.svg"
import DebitCardIcon from "@/assets/business-and-finance.svg"
import NextIcon from "@/assets/next.svg"
import RecentTransactionsIcon from "@/assets/Group 11889-1.svg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function TransactionList() {
  const { state } = useApp()

  return (
    <div className="w-full md:min-w-[366px] relative pb-12">
      <Accordion type="single" collapsible defaultValue="transactions" className="bg-white rounded-lg relative z-10">
        <AccordionItem value="transactions" className="border border-[#F0F0F0] rounded-lg">
          <AccordionTrigger className="group flex justify-between items-center p-6 rounded-lg bg-[#F5F9FF] hover:no-underline data-[state=open]:mb-6 [&>svg]:hidden">
            <h3 className="text-lg font-semibold text-[#0C365A] flex items-center gap-2">
              <span>
                <img src={RecentTransactionsIcon.src} alt="Recent Transactions" className="w-6 h-6" />
              </span>
              Recent transactions
            </h3>
            <img 
              src={DownArrowIcon.src} 
              alt="Toggle" 
              className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180" 
            />
          </AccordionTrigger>
          <AccordionContent className="pb-0 pt-0">
            <div className="space-y-4">
              {state.transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-start justify-between p-3 hover:bg-aspire-gray rounded-lg transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: transaction.iconBackgroundColor }}
                    >
                      <span className="text-lg">
                        <img src={transaction.icon.src} alt={transaction.merchant} className="w-3 h-3" />
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium leading-[18px] text-aspire-text-gray">{transaction.merchant}</p>
                      <p className="text-[13px] leading-[18px] text-aspire-text-secondary mt-1">{transaction.date}</p>
                      <div className="flex items-center gap-2 mt-3">
                        <div className="w-6 h-5 bg-[#325BAF] rounded-full flex items-center justify-center">
                          <span className="text-xs text-white">
                            <img src={DebitCardIcon.src} alt={transaction.merchant} className="w-2 h-2" />
                          </span>
                        </div>
                        <span className="text-xs text-[#325BAF] leading-[18px]">
                          {transaction.type === "credit" ? "Refund on debit card" : "Charged to debit card"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right flex items-center gap-2">
                    <p className={`font-semibold leading-[18px] ${transaction.amount > 0 ? "text-aspire-green" : "text-aspire-text-gray"}`}>
                      {transaction.amount > 0 ? "+" : "-"} S$ {formatCurrency(transaction.amount).replace("$", "").trim()}
                    </p>
                    <img src={NextIcon.src} alt="Next" className="w-[6px] h-3" />
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <button className="w-full bg-[#EDFFF5] border border-[#DDFFEC] rounded-b-lg py-4 text-sm font-medium text-aspire-green hover:bg-opacity-80 transition-colors absolute bottom-0 left-0 z-0">
        View all card transactions
      </button>
    </div>
  )
}
