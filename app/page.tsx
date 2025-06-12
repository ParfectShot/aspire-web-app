"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import LoadingSpinner from "@/components/LoadingSpinner"

export default function HomePage() {
  const router = useRouter()

  useEffect(() => {
    router.push("/cards")
  }, [router])

  return (
    <div className="flex-1 px-[60px] py-14">
      <LoadingSpinner />
    </div>
  )
}
