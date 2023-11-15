import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.page.html',
  styleUrls: ['./laboratorio.page.scss'],
})
export class LaboratorioPage implements OnInit {

  constructor(private navCtrl: NavController) {}
  irA(pagina: string) {
    this.navCtrl.navigateForward('/' + pagina);
}

  ngOnInit() {
  }

}
