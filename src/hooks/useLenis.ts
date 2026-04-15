'use client'

import { useContext } from 'react'
import { LenisContext } from '@/components/ui/SmoothScrollProvider'

/**
 * Returns the active Lenis instance from context.
 * Must be used inside a component wrapped by SmoothScrollProvider.
 */
export function useLenis() {
  return useContext(LenisContext)
}
