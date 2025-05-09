// todoApp.js

class TodoApp {
    constructor() {
      this.todos = [];
    }
  
    addTodo(task) {
      const todo = {
        id: Date.now(),
        task,
        completed: false,
      };
      this.todos.push(todo);
      return todo;
    }
  
    completeTodo(id) {
      const todo = this.todos.find(t => t.id === id);
      if (todo) {
        todo.completed = true;
      }
    }
  
    listTodos() {
      return this.todos.map(t => `${t.completed ? "[x]" : "[ ]"} ${t.task}`);
    }
  }
  
  // Ejemplo de uso
  const app = new TodoApp();
  app.addTodo("Aprender JavaScript");
  app.addTodo("Construir una app");
  app.completeTodo(app.todos[0].id);
  console.log(app.listTodos());
  