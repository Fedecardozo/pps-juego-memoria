import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
} from '@ionic/angular/standalone';
import { JuegoPage } from '../juego/juego.page';
@Component({
  selector: 'app-facil',
  templateUrl: './facil.page.html',
  styleUrls: ['./facil.page.scss'],
  imports: [
    IonFabButton,
    IonFab,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    JuegoPage,
  ],
  standalone: true,
})
export class FacilPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
