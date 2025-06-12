import type { Transaction } from "@/types"
import { formatCurrency } from "@/lib/utils"
import DebitCardIcon from "@/assets/business-and-finance.svg"
import NextIcon from "@/assets/next.svg"

interface TransactionListItemProps {
  transaction: Transaction
}

export default function TransactionListItem({ transaction }: TransactionListItemProps) {
  return (
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
            <div className="w-6 h-5 bg-action-blue rounded-full flex items-center justify-center">
              <span className="text-xs text-white">
                <img src={DebitCardIcon.src} alt={transaction.merchant} className="w-2 h-2" />
              </span>
            </div>
            <span className="text-xs text-action-blue leading-[18px]">
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
  )
} 