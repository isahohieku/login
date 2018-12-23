import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { signup } from './model/signup.model';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  toggleButton: boolean;

  SignupData: signup;
  constructor() {
    this.toggleButton = false;
  }

  toggleButtonTrigger() {
    this.toggleButton = !this.toggleButton;
  }

}
