// Rewrite this code using let or const properly:

// var app = "Todo+";
// var count = 0;
// count = count + 1;

const app = "Todo+";
var count = 0;
count = count + 1;

// Convert this function into an arrow function with an implicit return:

// function triple(n) {
//   return n * 3;
// }

const triple = (n) => n * 3

// Rewrite this using backticks and ${} syntax:

// const name = "Mona";
// const tasks = 3;
// const msg = "Hello " + name + ", you have " + tasks + " tasks.";

const name = "Mona";
const tasks = 3;
const msg = `Hello ${name}, you have ${tasks} tasks.`;

// Use destructuring to pull text and completed into variables:

const todo = { id: "t1", text: "Learn ES6", completed: false };

const { text, completed } = todo;

// Extract the first two items into a and b, and put the rest in others:

const arr = [10, 20, 30, 40];

const [a, b, ...others] = arr;

// Add "React" to the end of the array without mutating the original:

const topics = ["HTML", "CSS", "JS"];

const result = [...topics, "React"];

// Combine these objects into a new one without mutation:

const base = { theme: "light", items: 0 };
const override = { items: 3 };

const result1 = { ...base, ...override };

// Return a new array of strings showing checkboxes for completed todos:

const todos = [
  { id: "a", text: "Read",  completed: false },
  { id: "b", text: "Cook",  completed: true  },
];

const result2 = todos.map(t => `${t.completed ? "[x]" : "[ ]"} ${t.text}`);

// Remove the todo with id "b" without mutating the original:

const todos1 = [
  { id: "a", text: "Read" },
  { id: "b", text: "Cook" },
  { id: "c", text: "Sleep" },
];

const result3 = todos.filter(t => t.id !== "b");

// const todos = [
//   { id: "a", text: "Read" },
//   { id: "b", text: "Cook" },
//   { id: "c", text: "Sleep" },
// ];

// Flip the completed value for the todo with id "a":

// const todos = [
//   { id: "a", text: "Read", completed: false },
//   { id: "b", text: "Cook", completed: true  },
// ];

const result4 = todos.map(t =>
  t.id === "a" ? { ...t, completed: !t.completed } : t
);

// Remove the secret field while keeping the rest of the object:

const user = { id: 1, name: "Sara", secret: "xyz" };

const { secret, ...publicInfo } = user;
const result5 = publicInfo;

// Return a new array where each todo’s text is trimmed and lower-cased:

// const todos = [
//   { id: "a", text: "  Learn  " },
//   { id: "b", text: " ES6 " },
// ];

const result6 = todos.map(t => ({ ...t, text: t.text.trim().toLowerCase() }));

//   Write a function addUnique(todos, text) that:

// trims the text
// if it’s empty after trimming → return the original array
// if a todo already exists with the same text (case-insensitive) → return the original array
// otherwise, return a new array with a new todo added

const addUnique = (todos, text) => {
  const clean = text.trim();
  if (!clean) return todos;

  const exists = todos.some(t => t.text.toLowerCase() === clean.toLowerCase());
  if (exists) return todos;

  const newTodo = {
    id: (crypto?.randomUUID?.() || Date.now().toString()),
    text: clean,
    completed: false,
  };
  return [...todos, newTodo];
};

// Write a function replaceById(list, id, patch) that returns a new list where the item with the given id is replaced by merging in the patch object.

const result7 = todos
  .filter(t => !t.completed)
  .map(t => t.text.toUpperCase())
  .sort(); // ["REACT", "READING"]

// Using optional chaining (?.) and nullish coalescing (??), get the user’s name safely or return "Guest" if it doesn’t exist:

const data = { user: { profile: { name: "Mido" } } };

const name1 = data?.user?.profile?.name ?? "Guest";