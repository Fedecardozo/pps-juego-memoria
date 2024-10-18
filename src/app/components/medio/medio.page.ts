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
  selector: 'app-medio',
  templateUrl: './medio.page.html',
  styleUrls: ['./medio.page.scss'],
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
export class MedioPage implements OnInit {
  dir: string = 'assets/frutas/';
  path: string[] = [
    this.dir + 'coco.png',
    this.dir + 'frutilla.png',
    this.dir + 'naranja.png',
    this.dir + 'uva.png',
    this.dir + 'limon.png',
  ];
  colores: string[] = ['primary', 'tertiary', 'success', 'warning', 'dark'];
  constructor() {}

  ngOnInit() {}
}
