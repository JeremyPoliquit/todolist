import React, { useState } from "react";

function useClose(initialState = false) {
  const [closeVisible, setCloseVisible] = useState(initialState);

  const close = () => setCloseVisible(false);

  return { closeVisible, close };
}

export default useClose;
