import React, { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";

import { saveCallback } from "../../features/modelSlice";
import { USERS } from "../../features/dataTypes";
import { endEditing } from "../../features/stateSlice";

export default function UserEditor() {
  const user =
    useSelector((state) =>
      state.modelReducer.users.find(
        (user) => user.id === state.stateReducer.selectedId
      )
    ) || {};
  const jobPositions =
    useSelector((state) => state.modelReducer.jobPositions) || {};
  const dispatch = useDispatch();

  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      id: user.id || "",
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      age: user.age || "",
      jobTitle: user.jobTitle || "",
    }
  );

  const saveUser = (e) => {
    e.preventDefault();
    const dataInput = {
      data: userInput,
      dataType: USERS,
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

    setUserInput({
      [name]: newValue,
    });
  };

  return (
    <div className="">
      <form
        onSubmit={saveUser}
        className="grid grid-cols-4 gap-2 w-3/4 mx-auto mt-10"
      >
        <input
          name="id"
          className="col-span-4"
          onChange={handleChange}
          value={userInput.id}
          type="text"
          placeholder="ID"
          disabled
        />
        <input
          name="firstName"
          className=" bg-gray-50 py-2 px-5 border col-span-2 border-sky-200 rounded-lg focus:outline-none focus:ring-1"
          onChange={handleChange}
          value={userInput.firstName}
          type="text"
          placeholder="Enter first name ..."
          required
        />
        <input
          name="lastName"
          className=" bg-gray-50 col-span-2 py-2 px-5 border border-sky-200 rounded-lg focus:outline-none focus:ring-1"
          onChange={handleChange}
          value={userInput.lastName}
          type="text"
          required
          placeholder="Enter last name ..."
        />
        <input
          name="age"
          onChange={handleChange}
          className=" bg-gray-50 col-span-2 py-2 px-5 border border-sky-200 rounded-lg focus:outline-none focus:ring-1"
          value={userInput.age}
          type="number"
          required
          placeholder="Enter age ..."
        />
        <select
          onChange={handleChange}
          value={userInput.jobTitle}
          className=" bg-gray-50 col-span-2 py-2 px-5 border border-sky-200 rounded-lg focus:outline-none focus:ring-1"
          name="jobTitle"
          required
        >
          <option disabled value="">
            Select job title
          </option>
          {jobPositions.map((jp) => (
            <option className="p-6" key={jp.id} value={jp.jobTitle}>
              {jp.jobTitle}
            </option>
          ))}
        </select>

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
      </form>
    </div>
  );
}
