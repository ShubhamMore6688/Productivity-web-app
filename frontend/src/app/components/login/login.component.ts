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
  email: string = ''
  password: string = ''

  login(email: string, password: string){
    const loginData =  {email, password};
    if(this.email === '' && this.password === ''){

    }else if(this.email === ''){

    }else{
      
    }

    axios.post('http://localhost:3000/login', loginData)
    .then( Response => {
      console.log(Response.data)
      if(Response.data.success){
        this.router.navigate(['/Dashboard'])
      }
    }).catch( Error => {
      console.error("error", Error)
    })
  }
}
