import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.page.html',
  styleUrls: ['./exito.page.scss'],
})
export class ExitoPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  irAHome() {
    // Aquí debes colocar la ruta de tu página de inicio
    this.navCtrl.navigateForward('/home');
  }
  ngOnInit() {
  }

}
