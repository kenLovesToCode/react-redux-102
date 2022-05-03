import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JOB_POSITIONS } from "../../features/dataTypes";

import { saveCallback } from "../../features/modelSlice";
import { endEditing } from "../../features/stateSlice";

export default function JobPositionEditor() {
  const jobPosition =
    useSelector((state) =>
      state.modelReducer.jobPositions.find(
        (jp) => jp.id === state.stateReducer.selectedId
      )
    ) || {};

  const dispatch = useDispatch();

  const [jpInput, setJpInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      id: jobPosition.id || "",
      jobTitle: jobPosition.jobTitle || "",
    }
  );

  const saveJobPosition = (e) => {
    e.preventDefault();
    const dataInput = {
      data: jpInput,
      dataType: JOB_POSITIONS,
    };
    dispatch(saveCallback(dataInput));
    dispatch(endEditing());
  };

  const cancelCallback = () => {
    dispatch(endEditing());
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;

    setJpInput({
      [name]: newValue,
    });
  };

  return (
    <div>
      <form className="flex flex-col mx-auto mt-10" onSubmit={saveJobPosition}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter new job position..."
          name="jobTitle"
          className=" bg-gray-50 py-2 px-5 border col-span-2 border-sky-200 rounded-lg focus:outline-none focus:ring-1"
          required
          value={jpInput.jobTitle}
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="bg-green-500 px-4 py-2 rounded-lg mt-3 hover:bg-green-600"
          >
            Save
          </button>
          <button
            className="bg-red-500 px-4 py-2 rounded-lg mt-3 hover:bg-red-600"
            onClick={cancelCallback}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
