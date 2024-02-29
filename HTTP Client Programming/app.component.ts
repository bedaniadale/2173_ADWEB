import { Component } from '@angular/core';
import {HttpclientService} from './httpclient.service'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm2';
  httpusers: any; 
  searchText: any; 
  constructor(private httpclientList: HttpclientService) { 
    this.httpclientList.getUsersfromServer().subscribe((data:any)=> { 
      this.httpusers.data = data;
    })
  }
}
