"use client"

import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function SettingsPage() {
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex-1 px-[60px] py-14">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className={`text-xl md:text-sm text-white md:text-aspire-text-gray mb-2`}>
            {isMobile ? "Settings" : "Account Settings"}
          </h1>
          <p className="text-sm text-aspire-text-secondary">Manage your account preferences and security</p>
        </div>
      </div>

      <div className="shadow-[0_2px_12px_rgba(0,0,0,0.1)] border-2 border-[#FCFCFC] rounded-lg px-[60px] py-[40px]">
        <div className="flex flex-col items-center justify-center min-h-[500px] space-y-8">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-12 h-12 text-white animate-spin" style={{animationDuration: '3s'}} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12,15.5A3.5,3.5 0 0,1 8.5,12A3.5,3.5 0 0,1 12,8.5A3.5,3.5 0 0,1 15.5,12A3.5,3.5 0 0,1 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.22,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.22,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.68 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z"/>
              </svg>
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
          </div>
          
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-aspire-text-gray">Account Settings</h2>
            <p className="text-lg text-aspire-text-secondary max-w-md">
              Customize your banking experience with comprehensive settings and security options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">👤</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Profile</h3>
              <p className="text-sm text-aspire-text-secondary">Manage personal information</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔒</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Security</h3>
              <p className="text-sm text-aspire-text-secondary">Password & authentication</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🔔</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Notifications</h3>
              <p className="text-sm text-aspire-text-secondary">Alert preferences</p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🌐</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Language</h3>
              <p className="text-sm text-aspire-text-secondary">Region & language settings</p>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-xl border border-rose-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-rose-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏢</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Business</h3>
              <p className="text-sm text-aspire-text-secondary">Company information</p>
            </div>

            <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200 hover:shadow-md transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-xl">📊</span>
              </div>
              <h3 className="font-semibold text-aspire-text-gray mb-2">Preferences</h3>
              <p className="text-sm text-aspire-text-secondary">App customization</p>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-aspire-green text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-colors disabled:opacity-50" disabled>
              Save Changes
            </button>
            <button className="border border-aspire-text-gray text-aspire-text-gray px-8 py-3 rounded-lg hover:bg-aspire-gray transition-colors disabled:opacity-50" disabled>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
} 