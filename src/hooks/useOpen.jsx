import React, { useState } from 'react'

function useOpen(initialState = false) {
  const [visibleDisplay, setVisibleDisplay] = useState(initialState)

  const open = () => {
    setVisibleDisplay(true)
  }

  return {visibleDisplay, open}
}

export default useOpen