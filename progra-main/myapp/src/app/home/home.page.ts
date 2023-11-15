import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { EnfermeriaPage } from '../enfermeria/enfermeria.page';
import { ControlPage } from '../control/control.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private navCtrl: NavController) {}
  irA(pagina: string) {
    this.navCtrl.navigateForward('/' + pagina);
}
}