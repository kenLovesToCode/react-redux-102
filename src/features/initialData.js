import { USERS, JOB_POSITIONS } from "./dataTypes";
import { nanoid } from "nanoid";

export const initialData = {
  modelData: {
    [USERS]: [
      {
        id: nanoid(),
        firstName: "Joe",
        lastName: "Mama",
        age: 24,
        jobTitle: "React.js Developer",
      },
      {
        id: nanoid(),
        firstName: "Jane",
        lastName: "Mama",
        age: 24,
        jobTitle: "Vue.js Developer",
      },
      {
        id: nanoid(),
        firstName: "John",
        lastName: "Doe",
        age: 24,
        jobTitle: "React.js Developer",
      },
    ],
    [JOB_POSITIONS]: [
      { id: nanoid(), jobTitle: "React.js Developer" },
      { id: nanoid(), jobTitle: "Vue.js Developer" },
    ],
  },
  stateData: {
    editing: false,
    selectedId: -1,
    selectedType: "users",
  },
};
