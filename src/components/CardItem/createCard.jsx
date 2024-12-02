import React from "react";
import Button from "../Button";
import useOpen from "../../hooks/useOpen";
import InputTitle from "../ListItem/inputTitle";
import useClose from "../../hooks/useClose";
import useToggle from "../../hooks/useToggle";

export default function createCard() {
  const { openVisible, open } = useOpen();
  const { closeVisible, close } = useClose();
  const { isVisible, toggleVisiblity } = useToggle()

  return (
    <>
      {/* {(!closeVisible && <Button /> || (
      <div className="card card-compact shadow-md card-bordered flex-none w-1/4 h-full max-h-full bg-slate-100">
        <div className="card-body overflow-auto">
          
            <>
              <div className="flex flex-col gap-2">
                <InputTitle />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={open}
                  className="flex justify-start btn bg-slate-300 btn-sm "
                >
                  Add Card
                </button>
                <button
                  type="button"
                  onClick={close}
                  className="flex justify-start btn bg-slate-300 btn-sm "
                >
                  Cancel
                </button>
              </div>
            </>
          
        </div>
      </div>
      ))} */}

      {(!isVisible && (
        <div className="card card-compact shadow-md card-bordered flex-none w-1/4 h-full max-h-full bg-slate-100">
          <div className="card-body overflow-auto">
            <>
              <div className="flex flex-col gap-2">
                <InputTitle />
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  
                  className="flex justify-start btn bg-slate-300 btn-sm "
                >
                  Add Card
                </button>
                <button
                  type="button"
                  onClick={toggleVisiblity}
                  className="flex justify-start btn bg-slate-300 btn-sm "
                >
                  Cancel
                </button>
              </div>
            </>
          </div>
        </div>
      )) || <Button onClick={toggleVisiblity} />}
    </>
  );
}
