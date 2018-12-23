import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-signuppage',
  templateUrl: './signuppage.component.html',
  styleUrls: ['./signuppage.component.css']
})
export class SignuppageComponent implements OnInit {

  toggleMove: boolean;
  toggleAnimation: boolean;
  constructor(private toggleservice: AppService) {
    this.toggleAnimation = false;
  }

  ngOnInit() {
    this.toggleMove = this.toggleservice.toggleButton;
  }

}
