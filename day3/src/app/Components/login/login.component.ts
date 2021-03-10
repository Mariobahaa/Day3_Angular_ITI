import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name =  "";
  age:number;
  user;

  validation = new FormGroup({
    name: new FormControl("Mario",[Validators.maxLength(18), Validators.minLength(6), Validators.nullValidator]),
    age: new FormControl(22, [Validators.min(19), Validators.max(150), Validators.nullValidator])
  });

  @Output() event = new EventEmitter();

  get nameValid(){
    return this.validation.controls.name.valid;
  }

  get ageValid(){
    return this.validation.controls.age.valid;
  }

  send(nm, a){
    this.user = {name:nm.value, age:a.value}
    this.event.emit(this.user);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
