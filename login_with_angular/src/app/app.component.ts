import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  institute = {
    emailadress: '',
    pwrd: ''
  };

  instituteLogin(instForm: NgForm) {
      console.log("logged in");
      console.log(instForm.value);
  }

}
