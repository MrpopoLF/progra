import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analisis',
  templateUrl: './analisis.page.html',
  styleUrls: ['./analisis.page.scss'],
})
export class AnalisisPage implements OnInit {
  analisisMedicos = [
    {
      nombre: 'Hemograma Completo',
      descripcion: 'Análisis de sangre para evaluar células sanguíneas.',
      imagen: 'assets/analisis/hemograma.jpg'
    },
    {
      nombre: 'Perfil Lipídico',
      descripcion: 'Medición de lípidos en sangre, como colesterol y triglicéridos.',
      imagen: 'assets/analisis/perfil-lipidico.jpg'
    },
    {
      nombre: 'Prueba de Glucosa',
      descripcion: 'Mide los niveles de glucosa en sangre para diagnosticar diabetes.',
      imagen: 'assets/analisis/glucosa.jpg'
    },
    // Agrega más análisis médicos aquí
  ];

  constructor() { }

  ngOnInit() {
  }

}
