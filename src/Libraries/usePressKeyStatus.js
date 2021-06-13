import { useState, useEffect, useCallback } from 'react'

export const usePressKeyStatus = () => {
  const [stateOfPressKey, setStateOfPressKey] = useState({})
  const handleKeyUp = useCallback((e) => {
    const keyCode = e.keyCode

    if (keyCode === 37 || keyCode === 65) {
      // left
      setStateOfPressKey((state) => ({
        ...state,
        left: false,
      }))
    }
    if (keyCode === 39 || keyCode === 68) {
      //right
      setStateOfPressKey((state) => ({
        ...state,
        right: false,
      }))
    }
    if (keyCode === 38 || keyCode === 87) {
      //top
      setStateOfPressKey((state) => ({
        ...state,
        top: false,
      }))
    }
    if (keyCode === 40 || keyCode === 83) {
      //down
      setStateOfPressKey((state) => ({
        ...state,
        down: false,
      }))
    }
  }, [])

  const handleKeyDown = useCallback((e) => {
    const keyCode = e.keyCode
    console.log(`Pressed: ${e.keyCode}`)

    if (keyCode === 37 || keyCode === 65) {
      // left
      setStateOfPressKey((state) => ({
        ...state,
        left: true,
      }))
    }
    if (keyCode === 39 || keyCode === 68) {
      //right
      setStateOfPressKey((state) => ({
        ...state,
        right: true,
      }))
    }
    if (keyCode === 38 || keyCode === 87) {
      //top
      setStateOfPressKey((state) => ({
        ...state,
        top: true,
      }))
    }
    if (keyCode === 40 || keyCode === 83) {
      //down
      setStateOfPressKey((state) => ({
        ...state,
        down: true,
      }))
    }
  }, [])

  useEffect(() => {
    window.addEventListener('keydown', (e) => handleKeyDown(e))
    window.addEventListener('keyup', (e) => handleKeyUp(e))
  }, [])

  return stateOfPressKey
}
