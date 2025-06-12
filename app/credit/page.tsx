"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function CreditPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex-1 px-[60px] py-14">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className={`text-xl md:text-sm text-white md:text-aspire-text-gray mb-2`}>
            {isMobile ? "Credit" : "Credit Management"}
          </h1>
          <p className="text-sm text-aspire-text-secondary">Manage your credit lines and loans</p>
        </div>
      </div>

      <div className="shadow-[0_2px_12px_rgba(0,0,0,0.1)] border-2 border-[#FCFCFC] rounded-lg px-[60px] py-[40px]">
        <div className="flex flex-col items-center justify-center min-h-[500px] space-y-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm5-18v4h3V3h-3z"/>
              </svg>
            </div>
            <div className="absolute -bottom-2 -left-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-aspire-text-gray">Credit Solutions</h2>
            <p className="text-lg text-aspire-text-secondary max-w-md">
              Access flexible credit options tailored for your business growth and financial needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-6xl">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📈</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Credit Line</h3>
              <p className="text-sm text-aspire-text-secondary">Flexible credit for business needs</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏦</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Business Loans</h3>
              <p className="text-sm text-aspire-text-secondary">Growth capital when you need it</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">💳</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Trade Finance</h3>
              <p className="text-sm text-aspire-text-secondary">Support international trade</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Credit Score</h3>
              <p className="text-sm text-aspire-text-secondary">Monitor your credit health</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-aspire-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50" disabled>
              Apply for Credit
            </button>
            <button className="border border-aspire-green text-aspire-green px-8 py-3 rounded-lg hover:bg-aspire-green hover:text-white transition-colors disabled:opacity-50" disabled>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 