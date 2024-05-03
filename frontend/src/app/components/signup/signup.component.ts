
import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  email:string =  '';
  password: string = '';

  constructor(){}

  createAccount(email: string, password: string){
    const signupData = {email, password};

    axios.post('http://localhost:3000/signup', signupData)
    .then( Response =>{
      console.log("get responce");
    }).catch(Error => {
      console.error('There was an error', Error);
    })

    // axios.get('http://localhost:3000/')
    // .then( Response => console.log("success"))
    // .catch(Error => console.log("error"))


   
  }
}
