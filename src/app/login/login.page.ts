import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})


export class LoginPage {

  constructor(private authService : AuthService , private router : Router, private alertController: AlertController){ }
  public user : string;
  public password : string;

  logIn()
  {
    this.authService.login(this.user , this.password).then( res => 
    {
      console.log(res);
      this.router.navigate(["/chat"]);
    }).catch(err => {
      console.log(err);
      this.usuarioInvalido();
    });
  }

  async usuarioInvalido() {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: 'Usuario o contraseña invalido',
      message: 'Al parecer ingresaste mal un usuario y/o contraseña, intentalo nuevamente',
      buttons: ['OK']
    });
    await alert.present();
  }

}
