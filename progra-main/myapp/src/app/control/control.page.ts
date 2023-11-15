import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';  // Asegúrate de importar NavController

@Component({
  selector: 'app-control',
  templateUrl: './control.page.html',
  styleUrls: ['./control.page.scss'],
})
export class ControlPage implements OnInit {
  
  total: number = 100; // Reemplaza 100 con tu lógica de cálculo del total

  constructor(private navCtrl: NavController) { }
  irAPago() {
    // Aquí debes colocar la ruta de tu página de pago
    this.navCtrl.navigateForward('/pago');
  }
  ngOnInit() {
  }

}
