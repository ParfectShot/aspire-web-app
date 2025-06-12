import LoadingSpinner from "@/components/LoadingSpinner"

export default function Loading() {
  return (
    <div className="flex-1 px-[60px] py-14">
      <div className="flex justify-between items-center mb-8">
        <div>
          <div className="h-6 bg-gray-200 rounded w-32 mb-2 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-40 animate-pulse"></div>
        </div>
        <div className="h-10 bg-gray-200 rounded w-24 animate-pulse"></div>
      </div>
      
      <div className="flex gap-8 mb-[20px]">
        <div className="h-6 bg-gray-200 rounded w-28 animate-pulse"></div>
        <div className="h-6 bg-gray-200 rounded w-32 animate-pulse"></div>
      </div>

      <div className="shadow-[0_2px_12px_rgba(0,0,0,0.1)] border-2 border-[#FCFCFC] rounded-lg px-[60px] py-[40px]">
        <LoadingSpinner />
      </div>
    </div>
  )
} 