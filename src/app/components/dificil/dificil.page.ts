import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { JuegoPage } from '../juego/juego.page';

@Component({
  selector: 'app-dificil',
  templateUrl: './dificil.page.html',
  styleUrls: ['./dificil.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    JuegoPage,
  ],
})
export class DificilPage implements OnInit {
  dir: string = 'assets/herramientas/';
  path: string[] = [
    this.dir + 'aujereadora.png',
    this.dir + 'cruz.png',
    this.dir + 'hacha.png',
    this.dir + 'llave.png',
    this.dir + 'maza.png',
    this.dir + 'motosierra.png',
    this.dir + 'taladro.png',
    this.dir + 'tornillo.png',
  ];
  colores: string[] = [
    'primary',
    'tertiary',
    'success',
    'warning',
    'dark',
    'secondary',
    'medium',
    'danger',
  ];
  constructor() {}

  ngOnInit() {}
}
