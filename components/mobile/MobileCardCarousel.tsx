"use client"

import React, { useCallback, useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import type { EmblaCarouselType } from 'embla-carousel'
import Card from '@/components/Card'
import { useApp } from '@/contexts/AppContext'
import type { Card as CardType } from '@/types'

export default function MobileCardCarousel() {
  const { state, dispatch } = useApp()
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    duration: 20,
  })

  const onIndicatorClick = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const toggleShowCardNumber = () => {
    dispatch({ type: "TOGGLE_SHOW_CARD_NUMBER" })
  }

  // Effect to sync our app state TO Embla
  useEffect(() => {
    if (emblaApi) {
      emblaApi.slideNodes()
    }
  }, [emblaApi, state.currentCardIndex])

  return (
    <div>
      <div className="embla" ref={emblaRef}>
        <div className="flex embla__container">

          {state.cards.map((card: CardType, index: number) => (
            <div className="embla__slide relative pt-8 flex-grow-0 flex-shrink-0 basis-full min-w-0" key={card.id}>
              <div className="flex justify-end mb-3 absolute top-0 right-8">
                <button
                  className="flex items-center gap-2 bg-white p-2 rounded-md text-aspire-green hover:text-opacity-80 transition-colors"
                  onClick={toggleShowCardNumber}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                  <span className="text-xs">{state.showCardNumber ? "Hide" : "Show"} card number</span>
                </button>
              </div>
              <Card card={card} isActive={index === state.currentCardIndex} showCardNumber={state.showCardNumber} />
            </div>
          ))}
        </div>

      </div>

      {state.cards.length > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          {state.cards.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${index === state.currentCardIndex ? "bg-aspire-green w-4" : "bg-white/40"}`}
              onClick={() => onIndicatorClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  )
} 