import React, { useState } from "react";
import { Routes, Route, NavLink } from "react-router-dom";

import JobPositionDisplay from "../pages/job-position/JobPositionDisplay";
import UserDisplay from "../pages/user/UserDisplay";

export default function HomePage() {
  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Joe",
      lastName: "Mama",
      age: 24,
      jobTitle: "React.js Developer",
    },
    {
      id: 2,
      firstName: "Jane",
      lastName: "Mama",
      age: 24,
      jobTitle: "Vue.js Developer",
    },
    {
      id: 3,
      firstName: "John",
      lastName: "Doe",
      age: 24,
      jobTitle: "React.js Developer",
    },
  ]);

  const [userID, setUserID] = useState(3);
  const [jobPositionID, setJobPositionID] = useState(2);

  const [jobPositions, setJobPositions] = useState([
    { id: 1, jobTitle: "React.js Developer" },
    { id: 2, jobTitle: "Vue.js Developer" },
  ]);

  const saveUser = (data) => {
    if (data.id !== "") {
      //edit existing
      setUsers((users) =>
        users.map((user) => (user.id === data.id ? data : user))
      );
    } else {
      //create new
      setUserID(userID + 1);
      data.id = userID + 1;
      setUsers([...users, data]);
    }
  };
  const deleteUser = (id) => {
    setUsers((users) => users.filter((user) => user.id !== id));
  };

  const saveJobPosition = (data) => {
    if (data.id !== "") {
      //edit existing
      setJobPositions((jobPositions) =>
        jobPositions.map((jp) => (jp.id === data.id ? data : jp))
      );
    } else {
      //create new
      setJobPositionID(jobPositionID + 1);
      data.id = jobPositionID + 1;
      setJobPositions([...jobPositions, data]);
    }
  };
  const deleteJobPosition = (id) => {
    setJobPositions((jobPositions) =>
      jobPositions.filter((jp) => jp.id !== id)
    );
  };

  return (
    <div className="flex h-full">
      <div className="h-screen basis-1/4 flex flex-col gap-2 px-3 py-6 text-white border-r border-zinc-900">
        <NavLink
          to="/users"
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg text-center c__button"
        >
          USERS
        </NavLink>
        <NavLink
          to="/job-positions"
          className="bg-blue-500 hover:bg-blue-600 p-3 rounded-lg text-center c__button"
        >
          JOB POSITIONS
        </NavLink>
      </div>
      <div className="h-screen basis-3/4 p-4">
        <Routes>
          <Route
            path="/job-positions"
            element={
              <JobPositionDisplay
                jobPositions={jobPositions}
                saveCallback={saveJobPosition}
                deleteCallback={deleteJobPosition}
              />
            }
          />
          <Route
            path="/users"
            element={
              <UserDisplay
                deleteCallback={deleteUser}
                users={users}
                jobPositions={jobPositions}
                saveCallback={saveUser}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}
