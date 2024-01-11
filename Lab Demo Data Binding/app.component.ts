import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showData($event: any){ 
    console.log("Button is clicked!"); 
    if($event) { 
      console.log($event.target); 
      console.log($event.target.value); 
    }
  }

  clickCount = 0; 
  clickMe() {
    this.clickCount+=1; 
  }
  title = ' This string is interpolated';
  clientName = 'Dale'; 
  appliedCSS = 'green'; 
  notAppliedCSS = false; 
  myColor = 'red';

 
}
