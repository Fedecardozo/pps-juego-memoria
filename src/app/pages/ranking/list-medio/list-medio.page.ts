import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Resultado } from 'src/app/models/resultado';

@Component({
  selector: 'app-list-medio',
  templateUrl: './list-medio.page.html',
  styleUrls: ['./list-medio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
  ],
})
export class ListMedioPage implements OnInit {
  @Input() mejoresCinco: Resultado[] = [];

  constructor() {}

  ngOnInit() {
    this.mejoresCinco.sort((a, b) => parseInt(a.tiempo) - parseInt(b.tiempo));
    this.mejoresCinco = this.mejoresCinco.slice(0, 5);
  }
}
