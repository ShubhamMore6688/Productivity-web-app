import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private router: Router){}
   // backend url
  backend: string = 'https://productivity-web-app-backend.vercel.app'
  email: string = ''
  password: string = ''

  login(email: string, password: string){
    const loginData =  {email, password};
    if(this.email === '' && this.password === ''){

    }else if(this.email === ''){

    }else{
      
    }

    

    axios.post(`${this.backend}/login`, loginData, {withCredentials: true})
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
