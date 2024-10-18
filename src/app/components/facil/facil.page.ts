import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCardHeader,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { UtilService } from 'src/app/services/util.service';
import { Imagen } from 'src/app/models/imagen';

@Component({
  selector: 'app-facil',
  templateUrl: './facil.page.html',
  styleUrls: ['./facil.page.scss'],
  standalone: true,
  imports: [
    IonCol,
    IonRow,
    IonGrid,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonCard,
    IonCardHeader,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class FacilPage implements OnInit {
  util: UtilService = inject(UtilService);
  path: string[] = [
    'assets/octopus.png',
    'assets/lion.png',
    'assets/monkey.png',
  ];
  colores: string[] = ['primary', 'tertiary', 'success'];
  imagenes: Imagen[] = [];
  detenerTimer: boolean = false;

  constructor() {
    for (let index = 0; index < this.path.length; index++) {
      const element = new Imagen(this.colores[index], this.path[index]);
      const element2 = new Imagen(this.colores[index], this.path[index]);
      this.imagenes.push(element);
      this.imagenes.push(element2);
    }
  }

  ngOnInit() {
    this.util.timer(() => {
      return this.detenerTimer;
    });
    console.log(this.util.desordenarArray(this.imagenes));
  }

  darVueltaCard() {
    this.detenerTimer = true;
  }
}
