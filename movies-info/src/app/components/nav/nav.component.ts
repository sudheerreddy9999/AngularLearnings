import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  // Import CommonModule here
import { TodoComponent } from '../todo/todo.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FontAwesomeModule, 
    FormsModule, 
    CommonModule,  // Add CommonModule here
    TodoComponent
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faArrowRight = faArrowRight;
  currentPage: string = "todo";

  ShowTodoApp() {
    console.log("I got clicked");
  }
}
