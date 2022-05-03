import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startEditing } from "../../features/stateSlice";
import { deleteCallback } from "../../features/modelSlice";
import { USERS } from "../../features/dataTypes";

export default function UserTable() {
  const users = useSelector((state) => state.modelReducer.users);
  const dispatch = useDispatch();

  const editCallback = (id) => {
    dispatch(startEditing(id));
  };

  const deleteUser = (id) => {
    const dataInput = {
      id,
      dataType: USERS,
    };
    dispatch(deleteCallback(dataInput));
  };

  return (
    <table className="table-fixed w-full text-left">
      <thead className="text-sm uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            First name
          </th>
          <th className="px-6 py-3">Last name</th>
          <th className="px-6 py-3">Age</th>
          <th className="px-6 py-3">Job Title</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr className="border-b border-zinc-300" key={user.id}>
            <th className="px-6 py-2">{user.id}</th>
            <td className="px-6 py-2">{user.firstName}</td>
            <td className="px-6 py-2">{user.lastName}</td>
            <td className="px-6 py-2">{user.age}</td>
            <td className="px-6 py-2">{user.jobTitle}</td>
            <td className="px-6 py-2">
              <button
                className="bg-amber-300 px-1 rounded-lg text-sm"
                onClick={() => editCallback(user.id)}
              >
                Edit
              </button>{" "}
              |{" "}
              <button
                className="bg-red-400 px-1 rounded-lg text-sm"
                onClick={() => deleteUser(user.id)}
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
