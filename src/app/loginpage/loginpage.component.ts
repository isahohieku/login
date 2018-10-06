import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms'
import { signin } from '../../model/signin.model'
import { signup } from '../../model/signup.model'
import { FirebaseAuth, FirebaseApp, FirebaseStorage, FirebaseFirestore  } from '@angular/fire';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {

  SigninForm: FormGroup
  email: FormControl
  password: FormControl

  SignupForm:FormGroup
  firstname:FormControl
  lastname:FormControl
  emailsignup:FormControl
  passwordsignup:FormControl
  password2signup:FormControl

  SigninData:signin
  SignupData: signup

  LoginData

  constructor(private appService: AppService) { 
  }

  ngOnInit() {

    this.createFormControl()
    this.createForm()
    this.createFormControlSignup()
    this.createFormSignup()
  }

  createFormControl(){
    this.email = new FormControl
    this.password = new FormControl
  }

  createForm(){
    this.SigninForm = new FormGroup({
      email: this.email,
      password: this.password
    })
  }

  createFormControlSignup(){
    this.firstname = new FormControl
    this.lastname = new FormControl
    this.emailsignup = new FormControl
    this.passwordsignup = new FormControl
    this.password2signup = new FormControl
  }

  createFormSignup(){
    this.SignupForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname,
      emailsignup: this.emailsignup,
      passwordsignup: this.passwordsignup,
      password2signup: this.password2signup
    })
  }


  Login(){
    if (this.SigninForm.valid){
      this.SigninData = new signin(this.email.value, this.password.value)
    }

    this.appService.AuthPass(this.SigninData)
  }


  Signup(){
    if(this.SignupForm.valid){
      this.SignupData = new signup(this.emailsignup.value, this.passwordsignup, this.firstname.value, this.lastname.value)
      
    }

    // this.firestore.collection('auth').add(this.SignupData)
  }

}
