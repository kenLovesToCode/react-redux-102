import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { startCreating } from "../../features/stateSlice";
import UserEditor from "./UserEditor";
import UserTable from "./UserTable";

export default function UserDisplay() {
  const editing = useSelector((state) => state.stateReducer.editing);

  const dispatch = useDispatch();

  const createUser = () => {
    dispatch(startCreating());
  };
  // const [showEditor, setShowEditor] = useState(false);
  // const [selectedUser, setSelectedUser] = useState(null);

  // const createUser = () => {
  //   setShowEditor(true);
  //   setSelectedUser({});
  // };

  // const cancelEditing = () => {
  //   setShowEditor(false);
  //   setSelectedUser(null);
  // };

  // const saveUser = (data) => {
  //   props.saveCallback(data);
  //   setShowEditor(false);
  //   setSelectedUser(null);
  // };

  // const startEditing = (data) => {
  //   setSelectedUser(data);
  //   setShowEditor(true);
  // };

  if (editing) {
    return (
      <UserEditor
      // cancelCallback={cancelEditing}
      // saveCallback={saveUser}
      // jobPositions={props.jobPositions}
      // user={selectedUser}
      />
    );
  } else {
    return (
      <div className="">
        <h1 className="p-4 font-bold text-3xl border-b-4 border-cyan-500 w-max mb-4">
          Users List
        </h1>
        <UserTable
        // users={props.users}
        // editCallback={startEditing}
        // deleteCallback={props.deleteCallback}
        />
        <button
          onClick={createUser}
          className="bg-green-500 px-4 py-2 rounded-lg mt-3 hover:bg-green-600"
        >
          Create new user
        </button>
      </div>
    );
  }
}
