import { useEffect, useLayoutEffect } from 'react'

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect

export default useIsomorphicLayoutEffect

// Thanks to...
// https://github.com/juliencrn/usehooks-ts
