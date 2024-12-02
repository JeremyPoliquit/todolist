import React from "react";
import Navbar from "../components/Navbar";
import ButtonCard from "../components/Button";
import CardForm from "../components/CardItem/createCard";
import InputTitle from "../components/ListItem/inputTitle"
import useOpen from "../hooks/useOpen";
import useClose from "../hooks/useClose";
import useToggle from "../hooks/useToggle"

function Home() {
  const { openVisible, open } = useOpen();
  const { closeVisible, close } = useClose();
  const { isVisible, toggleVisiblity} = useToggle()

  return (
    <div className="min-h-screen h-screen flex flex-col">
      <div className="h-16 flex-none">
        <Navbar title="Todo List" />
      </div>

      <div className="flex gap-4 mx-7 mt-5 w-full max-w-screen-xl  overflow-x-auto">
        { (!openVisible && <ButtonCard onClick={open} /> ) || <CardForm /> || (!isVisible && <CardForm onClick={toggleVisiblity} />) || <ButtonCard/> }
      </div>
    </div>
  );
}

export default Home;
