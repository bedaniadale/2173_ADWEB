import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms'; //ngModel
@Component({
  selector: 'app-root',
  // standalone: true, 
  // imports: [CommonModule, RouterOutlet, FormsModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Your title here';
 
}
