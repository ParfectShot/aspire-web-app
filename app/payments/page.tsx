"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function PaymentsPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex-1 px-[60px] py-14">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className={`text-xl md:text-sm text-white md:text-aspire-text-gray mb-2`}>
            {isMobile ? "Payments" : "Payment Management"}
          </h1>
          <p className="text-sm text-aspire-text-secondary">Manage your payments and transfers</p>
        </div>
      </div>

      <div className="shadow-[0_2px_12px_rgba(0,0,0,0.1)] border-2 border-[#FCFCFC] rounded-lg px-[60px] py-[40px]">
        <div className="flex flex-col items-center justify-center min-h-[500px] space-y-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-aspire-green rounded-full animate-bounce"></div>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-aspire-text-gray">Payments Hub</h2>
            <p className="text-lg text-aspire-text-secondary max-w-md">
              Your comprehensive payment solution is coming soon. Manage transfers, bill payments, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💸</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Quick Transfer</h3>
              <p className="text-sm text-aspire-text-secondary">Send money instantly to anyone</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📋</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Bill Payments</h3>
              <p className="text-sm text-aspire-text-secondary">Pay your bills automatically</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔄</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Recurring</h3>
              <p className="text-sm text-aspire-text-secondary">Set up recurring payments</p>
            </div>
          </div>

          <button className="bg-aspire-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50" disabled>
            Coming Soon
          </button>
        </div>
      </div>
    </div>
  )
} 