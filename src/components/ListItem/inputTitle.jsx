import React from "react";
import useClose from '../../hooks/useClose'

export default function inputTitle() {

  const {visibleDiplay, close} = useClose()

  return (
    <div className="flex flex-col gap-2">

      <input
        type="text"
        className="border px-4 py-2 bg-white rounded-xl shadow-md w-full"
        placeholder="Add Title"
      />
    </div>
  );
}
