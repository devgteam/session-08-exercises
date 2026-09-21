const tasks = [
  { id: 1, task: "Practice JavaScript" },
  { id: 2, task: "Learn localStorage" }
];

// Save
localStorage.setItem("practiceTasks", JSON.stringify(tasks));

// Retrieve
const savedTasks = JSON.parse(localStorage.getItem("practiceTasks"));

console.table(savedTasks);