/**
 * Write a function and use an enum to:
 * - Define priority levels: Low, Medium, High
 * - Accept an object containing a task name and a priority level
 * - Return a string in the format: “Task {name} has priority {priority}”
 * - Handle invalid values — if the priority is unknown, return “Invalid priority”
 */


// Definition of enum with priority levels
enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

// Task interface
interface Task {
  name: string;
  priority: string; // can be valid or invalid
}

// Function that handles the task
function describeTask(task: Task): string {
  const validPriorities = Object.values(Priority);
  if (validPriorities.includes(task.priority as Priority)) {
    return `Task ${task.name} has priority ${task.priority}`;
  } else {
    return "Invalid priority";
  }
}

// Example usage
const task1: Task = { name: "Write report", priority: "High" };
const task2: Task = { name: "Clean desk", priority: "Medium" };
const task3: Task = { name: "Check emails", priority: "Urgent" }; // invalid priority

console.log(describeTask(task1)); // Task Write report has priority High
console.log(describeTask(task2)); // Task Clean desk has priority Medium
console.log(describeTask(task3)); // Invalid priority
