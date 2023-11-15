import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {

  constructor(private navCtrl: NavController) { }
  realizarPago() {
    // Lógica para procesar el pago
    console.log('Pago realizado exitosamente');
    // Puedes redirigir a otra página después del pago si es necesario
  }
  irAExito() {
    // Aquí debes colocar la ruta de tu página de pago
    this.navCtrl.navigateForward('/exito');
  }
  ngOnInit() {
  }

}
