import React from "react";
import Navbar from "../components/Navbar";
import AddButtonList from "../components/addListButton";
import List from "../components/List";

function Home() {
  return (
    <div className="min-h-screen h-screen flex flex-col">
      <div className="h-16 flex-none">
        <Navbar title="Todo List" />
      </div>

      <div className="flex gap-4 mx-7 mt-5 w-full max-w-screen-xl h-full max-h-full overflow-x-auto">
        <AddButtonList />
        <List />
        <AddButtonList />
        <List />
        <AddButtonList />
      </div>
    </div>
  );
}

export default Home;
