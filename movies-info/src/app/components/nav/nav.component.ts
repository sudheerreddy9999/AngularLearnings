import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TodoComponent } from '../todo/todo.component';
import { MoviesInfoComponent } from '../movies-info/movies-info.component';
import { CricketComponent } from '../cricket/cricket.component';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    FontAwesomeModule, 
    FormsModule, 
    CommonModule,  // Add CommonModule here
    TodoComponent,
    MoviesInfoComponent,
    CricketComponent
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  faArrowRight = faArrowRight;
  currentPage: string = "cricket";

  ShowTodoApp(todo:string) {
    this.currentPage=todo;
  }
}
