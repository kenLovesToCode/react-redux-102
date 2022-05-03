import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { JOB_POSITIONS } from "../../features/dataTypes";
import { startEditing } from "../../features/stateSlice";
import { deleteCallback } from "../../features/modelSlice";

export default function JobPositionTable() {
  const jobPositions =
    useSelector((state) => state.modelReducer.jobPositions) || {};
  const dispatch = useDispatch();

  const editJobPosition = (id) => {
    dispatch(startEditing(id));
  };

  const deleteJobPosition = (id) => {
    const dataInput = {
      id,
      dataType: JOB_POSITIONS,
    };

    dispatch(deleteCallback(dataInput));
  };

  return (
    <table className="table-fixed w-full text-left">
      <thead className="text-sm uppercase bg-gray-50">
        <tr>
          <th className="px-6 py-3">ID</th>
          <th className="px-6 py-3">Job Title</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {jobPositions.map((jp) => (
          <tr className="border-b border-zinc-300" key={jp.id}>
            <th className="px-6 py-2">{jp.id}</th>
            <td className="px-6 py-2">{jp.jobTitle}</td>
            <td className="px-6 py-2">
              <button
                className="bg-amber-300 px-1 rounded-lg text-sm"
                onClick={() => editJobPosition(jp.id)}
              >
                Edit
              </button>{" "}
              |{" "}
              <button
                className="bg-red-400 px-1 rounded-lg text-sm"
                onClick={() => deleteJobPosition(jp.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
