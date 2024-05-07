
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email:string =  '';
  password: string = '';

  constructor(private router: Router){}

  createAccount(email: string, password: string){
    const signupData = {email, password};

    axios.post('http://localhost:3000/signup', signupData)
    .then( Response =>{
      console.log("get responce");
      if(Response.data.success){
        this.router.navigate(['/Dashboard'])
      }
    }).catch(Error => {
      console.error('There was an error', Error);
    })


   
  }
}
