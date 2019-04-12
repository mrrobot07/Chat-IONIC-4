import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage {

  constructor(private menu: MenuController) { }

  openFirst() 
  {
    console.log("Hola");
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }


}
