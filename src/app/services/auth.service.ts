import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})




export class AuthService 
{
  constructor(private angularFireAuth : AngularFireAuth) { }


  //Iniciar sesión function
  login(email : string , password : string)
  {
    return new Promise((resolver , rejected) => {
      this.angularFireAuth.auth.signInWithEmailAndPassword(email , password).then(res => 
      {
        resolver(res);
      }).catch(err => rejected(err));
    });
  }

}
