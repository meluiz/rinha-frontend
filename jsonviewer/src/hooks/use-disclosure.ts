import React from 'react'

/**
 * Custom hook for managing state of a disclosure.
 * @returns {Object} - The disclosure state and functions.
 */
export function useDisclosure() {
  const [isOpen, setIsOpen] = React.useState(false)

  /**
   * Function to open the disclosure.
   */
  const onOpen = React.useCallback(() => {
    setIsOpen(true)
  }, [])

  /**
   * Function to close the disclosure.
   */
  const onClose = React.useCallback(() => {
    setIsOpen(false)
  }, [])

  /**
   * Function to toggle the disclosure state.
   */
  const onToggle = React.useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return { isOpen, onOpen, onClose, onToggle }
}
