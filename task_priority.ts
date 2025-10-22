// Definicja enum z poziomami ważności
enum Priority {
  Low = "Low",
  Medium = "Medium",
  High = "High",
}

// Interfejs zadania
interface Task {
  name: string;
  priority: string; // może być poprawny lub błędny
}

// Funkcja obsługująca zadanie
function describeTask(task: Task): string {
  const validPriorities = Object.values(Priority);
  if (validPriorities.includes(task.priority as Priority)) {
    return `Task ${task.name} has priority ${task.priority}`;
  } else {
    return "Invalid priority";
  }
}

// Przykładowe użycie
const task1: Task = { name: "Write report", priority: "High" };
const task2: Task = { name: "Clean desk", priority: "Medium" };
const task3: Task = { name: "Check emails", priority: "Urgent" }; // błędny priorytet

console.log(describeTask(task1)); // Task Write report has priority High
console.log(describeTask(task2)); // Task Clean desk has priority Medium
console.log(describeTask(task3)); // Invalid priority
