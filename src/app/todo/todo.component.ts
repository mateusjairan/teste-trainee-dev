import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/models/todo.model';
import { TodoService } from '../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  showCompletedTasks: boolean = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.loadTodos();
  }

  loadTodos() {
    this.todoService.getTodos().subscribe(todos => {
      this.todos = this.filteredTodos(todos);
    });
  }

  addTodo(newTodoTitle: string) {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title: newTodoTitle,
      completed: false
    };

    this.todoService.addTodo(newTodo);
  }

  updateTodo(updatedTodo: Todo): void {
  const index = this.todos.findIndex(todo => todo.id === updatedTodo.id);
  if (index !== -1) {
    this.todos[index] = updatedTodo;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

  deleteTodo(todoId: number): void {
  this.todos = this.todos.filter(todo => todo.id !== todoId);
  localStorage.setItem('todos', JSON.stringify(this.todos));
}

  clearAll() {
    if (this.todos.length > 0 && confirm('Are you sure you want to clear all tasks?')) {
      this.todoService.clearAll();
      this.loadTodos();
    }
  }

  clearCompletedTasks() {
    if (this.todos.filter.length > 0 &&
    confirm('Are you sure you want to clear all completed tasks?')) {
    this.todoService.clearCompletedTasks();
    this.loadTodos();
    }
  }


  toggleCompletedTasks() {
    this.showCompletedTasks = !this.showCompletedTasks;
    this.loadTodos();
  }

  filteredTodos(todos: Todo[]): Todo[] {
    return this.showCompletedTasks ? todos : todos.filter(todo => !todo.completed);
  }

  get labelClearAll(){
    return 'Limpar Todas as Tarefas';
  }
}
