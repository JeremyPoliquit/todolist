import React from "react";
import AddButtonList from "./addListButton";

export default function List() {
  return (
    <div className="card shadow-md border w-full max-w-sm  bg-slate-50">
      <div className="ps-6 py-4">
        <span className="text-xl font-semibold">Task</span>
      <div className="card-body h-screen max-h-full overflow-y-auto">
        <div className="flex flex-col gap-2">
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            Hello World
          </div>
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            delectus placeat perspiciatis reprehenderit sunt accusantium, maxime
            non iste expedita alias.
          </div>
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, neque.
          </div>
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ut
            molestias laborum nemo odit, amet quod, ducimus ullam quasi aperiam
            tenetur impedit! Veritatis cupiditate fuga id voluptates nihil
            earum. Provident officia adipisci nihil consequuntur, reprehenderit
            ut earum mollitia repellat, quaerat quae nesciunt perspiciatis
            dolorem autem sit aspernatur cupiditate minus aliquam modi,
            quibusdam itaque cumque numquam! Laboriosam praesentium suscipit
            sint deleniti cumque modi deserunt, iure quam odio sit impedit dicta
            blanditiis earum aliquid cupiditate pariatur quas ex. Laborum ullam
            dolorem aut quam odio quaerat praesentium animi fugiat quibusdam
            consectetur ratione quod, architecto laboriosam reprehenderit fugit,
            numquam ipsam asperiores incidunt et saepe.
          </div>
        </div>
        
      </div>

      <AddButtonList />
      </div>
    </div>
  );
}
