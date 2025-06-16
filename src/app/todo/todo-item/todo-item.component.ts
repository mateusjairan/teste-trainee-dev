import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() updateTodo = new EventEmitter<Todo>();
  @Output() deleteTodoEvent = new EventEmitter<number>();

  isEditing = false;
  editedTitle = '';

  startEditing(): void {
    this.isEditing = true;
    this.editedTitle = this.todo.title;
  }

 saveEdit(): void {
  if (this.editedTitle.trim()) { // Verifica se o título não está vazio
    this.todo.title = this.editedTitle;
    this.updateTodo.emit(this.todo);
    this.saveToLocalStorage();
    this.isEditing = false;
  }
}

  saveToLocalStorage(): void {
    const todos = JSON.parse(localStorage.getItem('todos') || '[]');
    const updatedTodos = todos.map((t: Todo) =>
      t.id === this.todo.id ? this.todo : t
    );
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  }

  onTaskChecked(): void {
    this.updateTodo.emit(this.todo);
    this.saveToLocalStorage();
  }

  deleteTodo(): void {
    this.deleteTodoEvent.emit(this.todo.id); // Emitindo o ID corretamente
  }
}
