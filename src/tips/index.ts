let date = new Date();

// Penerapan Partial
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
  completed: true,
  createdAt: date
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
console.log(todo2); // { title: 'organize desk', description: 'throw out trash' }


// Pick
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

// omit
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
console.log(todoInfo);

// narrowing
function padLeft(padding: number | string, input: string): string {
  if (typeof padding === "number") {
    return " ".repeat(padding) + input;
  }
  return padding + input;
}
console.log(padLeft(10, "makan"));

// function printAll(strs: string | string[] | null) {
//   if (typeof strs === "object") {
//     for (const s of strs) {
// 'strs' is possibly 'null'.
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     // do nothing
//   }
// }
// // const string1 = ["string", "string"]
// // printAll(string1)
// printAll("string")

// Menangani library eksternal tanpa tipe
// 1. cari definitely typed