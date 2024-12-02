import React, { useState } from "react";

function useOpen(initialState = false) {
  const [openVisible, setOpenVisible] = useState(initialState);

  const open = () => setOpenVisible(true);

  return { openVisible, open };
}

export default useOpen;
