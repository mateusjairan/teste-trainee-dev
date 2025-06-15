import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { ConfirmationModalComponent } from '../shared/components/confirmation-modal/confirmation-modal.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoItemComponent,
    NewTaskComponent,
    ConfirmationModalComponent
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    FormsModule,
  ]
})
export class TodoModule { }
