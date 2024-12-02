import React, { useState } from 'react'

function useToggle() {
  const [isVisible, setVisible] = useState(false)

  const toggleVisiblity = () => setVisible(prevState => !prevState)

  return {isVisible, toggleVisiblity};
}

export default useToggle