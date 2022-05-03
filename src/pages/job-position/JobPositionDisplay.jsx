import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { startCreating } from "../../features/stateSlice";
import JobPositionEditor from "./JobPositionEditor";
import JobPositionTable from "./JobPositionTable";

export default function JobPositionDisplay() {
  const editing = useSelector((state) => state.stateReducer.editing);
  const dispatch = useDispatch();

  const createJobPosition = () => {
    dispatch(startCreating());
  };

  if (editing) {
    //editing
    return <JobPositionEditor />;
  } else {
    //show table
    return (
      <div>
        <h1 className="p-4 font-bold text-3xl border-b-4 border-cyan-500 w-max mb-4">
          Job Positions List
        </h1>

        <JobPositionTable />
        <button
          className="bg-green-500 px-4 py-2 rounded-lg mt-3 hover:bg-green-600"
          onClick={createJobPosition}
        >
          Create new job position
        </button>
      </div>
    );
  }
}
