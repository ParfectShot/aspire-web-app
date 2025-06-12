"use client"

import { useApp } from "@/contexts/AppContext"
import DownArrowIcon from "@/assets/down-arrow.svg"
import RecentTransactionsIcon from "@/assets/Group 11889-1.svg"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import TransactionListItem from "./TransactionListItem"
import { Button } from "./ui/button"

export default function TransactionList() {
  const { state } = useApp()

  return (
    <div className="w-full md:min-w-[366px] relative pb-12">
      <Accordion type="single" collapsible defaultValue="transactions" className="bg-white rounded-lg relative z-10">
        <AccordionItem value="transactions" className="border border-aspire-border rounded-lg">
          <AccordionTrigger className="group flex justify-between items-center p-6 rounded-lg bg-aspire-hover-blue hover:no-underline data-[state=open]:mb-6 [&>svg]:hidden">
            <h3 className="text-lg font-semibold text-aspire-blue flex items-center gap-2">
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
                <TransactionListItem key={transaction.id} transaction={transaction} />
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      
      <Button variant="aspire-green" className="w-full rounded-t-none rounded-b-lg py-4 h-auto text-sm font-medium absolute bottom-0 left-0 z-0">
        View all card transactions
      </Button>
    </div>
  )
}
