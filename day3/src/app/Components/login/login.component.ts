import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name =  "";
  age:number;
  user;

  @Output() event = new EventEmitter();

  send(){
    this.user = {name:this.name, age:this.age}
    this.event.emit(this.user);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
