import { Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app.service';
import { LoginpageComponent } from '../loginpage/loginpage.component';
import { SignuppageComponent } from '../signuppage/signuppage.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  toggle: boolean;
  buttonValue: string;
  @ViewChild(LoginpageComponent) login: LoginpageComponent;
  @ViewChild(SignuppageComponent) signup: SignuppageComponent;

  constructor(private service: AppService) {
    this.toggle = false;
    this.buttonValue = 'Signup';
  }

  ngOnInit() {
  }

  ToggleState(e) {
    this.toggle = !this.toggle;
    this.service.toggleButtonTrigger();
    console.log(e);
    if (e.target.innerText === 'Sign in') {
      this.buttonValue  = 'Signup';
      this.login.toggleAnimation = true;
      this.signup.toggleAnimation = false;
    } else {
      this.buttonValue = 'Sign in';
      this.login.toggleAnimation = false;
      this.signup.toggleAnimation = true;
    }
  }

}
