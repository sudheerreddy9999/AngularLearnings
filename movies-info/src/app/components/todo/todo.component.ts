import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule,CommonModule,FontAwesomeModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  newTodo = {text:'',completed:false}
  faTrash = faTrash
  faTimes = faTimes
  todoList =[
    {text:'Learn Angular and practice',completed:false},
    {text:'pickup grocories from d mart',completed:false},
    {text:'play cricket on weekends',completed:false}
  ] 
  addNewTodo() {
    if (this.newTodo.text.trim()) {
      this.todoList.push({ ...this.newTodo });
      this.newTodo.text = ''; 
    }else{
      console.log("hello how are you")
      alert("Enter Valid todo")
    }
  }
  itemClicked(todo:number){
    console.log(todo)
    this.todoList[todo].completed = !this.todoList[todo].completed;
  }
  deleteTodo(deleteIndex:number){
    this.todoList.splice(deleteIndex,1);
  }
}
