import React, { useState } from 'react'

function useClose(initialState = false) {
    const [visibleDisplay, setVisibleDisplay] = useState(initialState)

    const close = () => setVisibleDisplay(false)

    return {visibleDisplay, close}
}

export default useClose