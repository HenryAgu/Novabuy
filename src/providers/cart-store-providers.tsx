// src/providers/cart-store-provider.tsx
'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { useCartStore } from '@/stores/cart-stores'

export type CartStoreApi = typeof useCartStore

export const CartStoreContext = createContext<CartStoreApi | undefined>(
  undefined,
)

export interface CartStoreProviderProps {
  children: ReactNode
}

export const CartStoreProvider = ({
  children,
}: CartStoreProviderProps) => {
  const storeRef = useRef<CartStoreApi | null>(null)
  if (storeRef.current === null) {
    storeRef.current = useCartStore
  }

  return (
    <CartStoreContext.Provider value={storeRef.current}>
      {children}
    </CartStoreContext.Provider>
  )
}

export const useCartStoreContext = <T,>(
  selector: (store: ReturnType<CartStoreApi>) => T,
): T => {
  const cartStoreContext = useContext(CartStoreContext)

  if (!cartStoreContext) {
    throw new Error(`useCartStoreContext must be used within CartStoreProvider`)
  }

  return useStore(cartStoreContext, selector)
}
