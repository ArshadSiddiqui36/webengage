import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Password Toggle (Hide/Show)
  type: string = 'password';
  showPassword = false;
  toggleClass($event: any) {
    this.showPassword = !this.showPassword;

    if (this.showPassword === false) {
      this.type = 'password';
    } else {
      this.type = 'text';
    }
  }
}
