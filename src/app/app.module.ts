import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';

import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodosComponent } from './todos/todos.component';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [AppComponent, TodoDetailComponent, TodosComponent, ErrorComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
