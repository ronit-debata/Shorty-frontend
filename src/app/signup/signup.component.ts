import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
    this.userService.registerUser(this.registerForm.value).subscribe((data) => {
      console.log(data)
      alert("Registered Successfully")
      this.router.navigate(['/URLShortener']);
    }, (err) => {
      console.log(err)
    })
  }

}
