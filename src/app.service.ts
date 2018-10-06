import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore'
import { Observable } from 'rxjs'

import { signup } from './model/signup.model'


@Injectable({
  providedIn: 'root'
})
export class AppService {

  auths
  SignupData: signup
  Login: Observable<any[]>
  constructor(private db:AngularFirestore) { 
    
  }

  AuthPass(data){
    this.Login = this.db.collection('auth').valueChanges()

    console.log(this.Login)

    this.db.firestore.collection('')


  }

  Signup(data){
    this.SignupData = data
    console.log(this.SignupData)

    

    //this.db.collection('auth').add(this.SignupData)
  }
}
