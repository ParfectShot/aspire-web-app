export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-aspire-gray rounded-full animate-spin border-t-aspire-green"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-aspire-green/30"></div>
      </div>
      <div className="text-center">
        <div className="text-lg font-semibold text-aspire-text-gray mb-2">Loading...</div>
        <div className="text-sm text-aspire-text-secondary">Please wait while we prepare your content</div>
      </div>
    </div>
  )
} 