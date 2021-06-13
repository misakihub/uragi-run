import { useState, useEffect, useCallback, useRef } from 'react'

export const useAnimationFrameCount = () => {
  const [frameCount, setFrameCount] = useState(0)

  useEffect(() => {
    const loop = () => {
      setFrameCount((prevFrameCount) => prevFrameCount + 1)
      requestAnimationFrame(loop)
    }

    requestAnimationFrame(loop)
  }, [])

  return frameCount
}
