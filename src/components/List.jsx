import React from "react";
import AddButtonList from "./addListButton";

export default function List() {
  return (
    <div className="card card-compact shadow-md card-bordered flex-none w-1/4 bg-slate-100">
      <div className="ps-5 py-4">
        <span className="text-xl font-semibold">Task</span>
      </div>

      <div className="card-body overflow-auto">
        <div className="flex flex-col gap-2">
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            Hello World
          </div>
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Aspernatur, neque.
          </div>
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            lore
          </div>
          <div className="px-4 py-2 bg-white rounded-xl shadow-md border">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim vel
            aperiam asperiores quae necessitatibus culpa sed perferendis
            repudiandae, esse deleniti!
          </div>
        </div>
        <div className="my-4">
          <button
            type="button"
            className="bg-slate-200 btn btn-sm w-full flex justify-start "
          >
            + Add List
          </button>
        </div>
      </div>
    </div>
  );
}
