import { useState, useEffect, useCallback } from 'react'

/**
 * Custom hook for persisting state to localStorage
 * Syncs React state with browser localStorage for data persistence
 * @param {string} key - localStorage key
 * @param {any} initialValue - Default value if no stored data exists
 * @returns {[any, Function]} - [storedValue, setValue]
 */
function useLocalStorage(key, initialValue) {
  // Lazy initialization - only read localStorage on first render
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Persist to localStorage whenever state changes
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }, [key, storedValue])

  // Wrap setter to match useState API
  const setValue = useCallback((value) => {
    setStoredValue(prev => {
      const valueToStore = value instanceof Function ? value(prev) : value
      return valueToStore
    })
  }, [])

  return [storedValue, setValue]
}

export default useLocalStorage