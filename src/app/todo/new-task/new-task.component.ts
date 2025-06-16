import { Component } from '@angular/core';
import { Todo } from '../../shared/models/todo.model';
import { TodoService } from '../../shared/services/todo.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  newTaskTitle: string = '';

  constructor(private todoService: TodoService) { }


  addTask(): void {
    if (this.newTaskTitle.trim()) { // Verifica se o título não está vazio
      const newTodo: Todo = {
        id: Date.now(), // Gera um ID único baseado no timestamp
        title: this.newTaskTitle,
        completed: false
      };
      this.todoService.addTodo(newTodo); // Adiciona a tarefa usando o serviço
      this.newTaskTitle = ''; // Limpa o campo após adicionar a tarefa
    } else {
      alert('O título da tarefa não pode estar vazio!'); // Exibe uma mensagem de erro
    }
  }
}
