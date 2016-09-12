import { Component } from '@angular/core';

import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { TodoItemComponent } from '../item/item.component';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/todo/list/list.component.html',
    styleUrls: ['app/todo//list/list.component.css'],
    // directives: [TodoItemComponent]
})
export class TodoListComponent {
    newTodo: Todo = new Todo();
    constructor(private todoService: TodoService) {
    }
    addTodo() {
        this.todoService.addTodo(this.newTodo);
        this.newTodo = new Todo();
    }
    get todos() {
        return this.todoService.getAllTodos();
    }
}
