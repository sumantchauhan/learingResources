const { v4: uuidv4 } = require("uuid");

const members = [
  {
    id: uuidv4().split("-")[0],
    name: "Upendra",
    age: 31,
    status: "Active",
  },
  {
    id: uuidv4().split("-")[0],
    name: "Reena",
    age: 29,
    status: "Active",
  },
  {
    id: uuidv4().split("-")[0],
    name: "Sumant",
    age: 27,
    status: "Active",
  },
  {
    id: uuidv4().split("-")[0],
    name: "Surya",
    age: 26,
    status: "Active",
  },
  {
    id: uuidv4().split("-")[0],
    name: "Rohit",
    age: 22,
    status: "Active",
  },
  {
    id: uuidv4().split("-")[0],
    name: "Pankaj",
    age: 20,
    status: "Active",
  },
  {
    id: uuidv4().split("-")[0],
    name: "Hiten",
    age: 6,
    status: "Active",
  },
  {
    id: uuidv4().split("-")[0],
    name: "Romik",
    age: 5,
    status: "Active",
  },
];

module.exports = members;
