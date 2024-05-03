import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = ''
  password: string = ''

  login(email: string, password: string){
    const loginData =  {email, password};

    axios.post('http://localhost:3000/login', loginData)
    .then( Response => {
      console.log(Response.data)
    }).catch( Error => {
      console.error("error", Error)
    })
  }
}
