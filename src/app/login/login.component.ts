import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm:FormGroup

  constructor(private userService:UserService, private router:Router) { 
    this.registerForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }

  submit() {
    this.userService.loginUser(this.registerForm.value).subscribe((data) => {
      console.log(data)
      alert("Logged In Successfully")
      this.router.navigate(['/URLShortener']);
    }, (err) => {
      console.log(err)
    })
  }

}
