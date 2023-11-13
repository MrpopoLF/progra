import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EnfermeriaPage } from '../enfermeria/enfermeria.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}
  irA(pagina: string) {
    this.router.navigate([EnfermeriaPage]);
}
}
