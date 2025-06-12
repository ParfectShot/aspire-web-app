"use client"

import React, { useEffect, useRef } from 'react'
import { useSpring, a } from '@react-spring/web'
import { useDrag } from '@use-gesture/react'
import CardActions from '@/components/CardActions'
import CardDetails from '@/components/CardDetails'
import TransactionList from '@/components/TransactionList'
import { useApp } from '@/contexts/AppContext'

const PEEK_HEIGHT = 260; 
const HEADER_HEIGHT = 130; 

export default function MobileActionsDrawer() {
  const { state } = useApp()
  const currentCard = state.cards[state.currentCardIndex]
  const sheetRef = useRef<HTMLDivElement>(null)

  const [{ y }, api] = useSpring(() => ({ y: 0 }))
  const [buttonProps, buttonApi] = useSpring(() => ({ opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none' }))

  const openDrawer = () => {
    // A higher tension will make the spring animation faster and more energetic
    api.start({ y: -window.innerHeight + HEADER_HEIGHT, config: { tension: 400, friction: 35 } })
    buttonApi.start({ opacity: 1, transform: 'scale(1)', pointerEvents: 'auto', config: { tension: 400, friction: 35 } })
  }
  
  const closeDrawer = () => {
    api.start({ y: 0, config: { tension: 400, friction: 35 } })
    buttonApi.start({ opacity: 0, transform: 'scale(0.8)', pointerEvents: 'none', config: { tension: 400, friction: 35 } })
  }

  const bind = useDrag(
    ({ last, movement: [, my], velocity: [, vy], direction: [, dy], cancel, event }) => {
      // Allow scrolling within the drawer content when it's open
      if (y.get() < -10) {
        const target = event.target as HTMLElement
        const hasScrollableParent = target.closest('[data-vaul-scrollable]')
        if (hasScrollableParent) {
          return
        }
      }

      // If the user flicks the drawer, open or close it
      if (last) {
        if (my < -150 || (vy < -0.5 && dy < 0)) {
          openDrawer()
        } else {
          closeDrawer()
        }
      } else {
        // While dragging, update the position
        api.start({ y: my, immediate: true })
      }
    },
    { 
      from: () => [0, y.get()], 
      filterTaps: true,
      bounds: { top: -window.innerHeight + HEADER_HEIGHT },
      rubberband: true,
      axis: 'y',
    }
  );

  return (
    <>
      {/* This div creates the space for the peeking drawer so content isn't hidden */}
      <div style={{ height: `calc(100vh - 508px)` }} />

      <a.div
        ref={sheetRef}
        className="fixed left-0 right-0 bottom-0 h-full w-full touch-none"
        style={{
          y,
          transform: `translateY(calc(100% - 206px))`
        }}
        {...bind()}
      >
        <div className="bg-white rounded-t-3xl h-full shadow-2xl flex flex-col relative">
          {currentCard && (
            <CardActions card={currentCard} />
          )}

          <div 
            className="mt-6 px-4 flex-1 overflow-y-auto"
            data-vaul-scrollable
          >
            <div className="space-y-6 pb-8">
              <CardDetails />
              <TransactionList />
            </div>
          </div>
          
          <a.button
            onClick={closeDrawer}
            style={buttonProps as any}
            className="absolute bottom-10 right-6 bg-aspire-green text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg focus:outline-none z-10"
            aria-label="Close drawer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </a.button>
        </div>
      </a.div>
    </>
  )
} 