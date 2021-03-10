import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day3';
  
  
  users:[{name:string, age:number}] = [{name: 'mario' , age: 22}];

  Add(user){
    this.users.push(user);
  }
}
