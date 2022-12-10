import { Component } from '@angular/core';
import { Todo } from 'src/interfaces/interfaces';
import { TodoService } from 'src/services/todo.service';

@Component({
  selector: 'movies',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent {
  todos!: Todo[];
  title: string = '';

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoService
      .getTodos()
      .then((res) => {
        this.todos = res;
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
  }

  sortTodos(): Todo[] {
    return this.todos.sort(
      (a, b) =>
        <any>new Date(b.created_at_time ? b.created_at_time : '') -
        <any>new Date(a.created_at_time ? a.created_at_time : '')
    );
  }

  addTodo() {
    this.todoService
      .addTodo(this.title)
      .then((res) => {
        this.todos.push(res);
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
    this.title = '';
  }
  deleteTodo(id: string) {
    this.todoService
      .deleteTodo(id)
      .then(() => {
        this.todos = JSON.parse(
          JSON.stringify(this.todos.filter((todo) => todo._id != id))
        );
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
  }
  updateStatusTodo(id: string, is_complated: boolean) {
    console.log(id, !is_complated);
    this.todoService
      .updateTodo(id, !is_complated)
      .then(() => {
        JSON.parse(
          JSON.stringify(
            this.todos.map((todo) => {
              if (todo._id == id) {
                todo.is_complated != is_complated;
              }
              return todo;
            })
          )
        );
        this.sortTodos();
      })
      .catch((err) => alert(err.message0));
  }
}
