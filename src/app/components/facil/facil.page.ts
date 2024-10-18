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
import { Alert } from 'src/app/models/alert';

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
  carta1: Imagen | null = null;
  carta2: Imagen | null = null;
  tiempo: string = '00:00';
  segundos: number = 0;
  contadorBuenas: number = 0;

  constructor() {
    for (let index = 0; index < this.path.length; index++) {
      const element = new Imagen(this.colores[index], this.path[index]);
      const element2 = new Imagen(this.colores[index], this.path[index]);
      this.imagenes.push(element);
      this.imagenes.push(element2);
    }
  }

  ngOnInit() {
    this.timer();
    this.util.desordenarArray(this.imagenes);
  }
  timer() {
    // Ejecuta la función cada 1 segundo (1000 milisegundos)
    const timer = setInterval(() => {
      this.segundos++;

      // Calcular minutos y segundos
      const minutos = Math.floor(this.segundos / 60);
      const segs = this.segundos % 60;

      // Formatear con ceros a la izquierda si es necesario
      const minutosFormateados = minutos < 10 ? '0' + minutos : minutos;
      const segsFormateados = segs < 10 ? '0' + segs : segs;

      // Actualizar el contenido del elemento con el tiempo formateado
      this.tiempo = `${minutosFormateados}:${segsFormateados}`;

      // Detiene el timer después de 10 segundos
      if (this.detenerTimer) {
        clearInterval(timer); // Detener el interval
      }
    }, 1000);
  }

  darVueltaCard(index: number) {
    const carta = this.imagenes[index];
    if (this.carta1 && this.carta2) {
      Alert.error('No podes dar vuelta la carta ', 'tonto');
    } else if (!this.carta1) {
      carta.mostrar = true;
      this.carta1 = carta;
    } else if (!this.carta2) {
      carta.mostrar = true;
      this.carta2 = carta;
      setTimeout(() => {
        this.verificar();
      }, 500);
    }
  }

  verificar() {
    if (this.carta1 && this.carta2 && this.carta1.path === this.carta2.path) {
      console.log('coinciden');
      this.contadorBuenas++;
      if (this.contadorBuenas === this.path.length) {
        this.detenerTimer = true;
        console.log('Ganaste');
        //Pregunto si queres seguir jugando
        this.reiniciarJuego();
      }
    } else if (this.carta1 && this.carta2) {
      Alert.error('No coinciden', '');
      this.carta1.mostrar = false;
      this.carta2.mostrar = false;
    }
    this.carta1 = null;
    this.carta2 = null;
  }

  reiniciarJuego() {
    this.util.desordenarArray(this.imagenes);
    this.imagenes.forEach((item) => {
      item.mostrar = false;
    });
    this.contadorBuenas = 0;
    this.segundos = 0;
    this.detenerTimer = false;
  }
}
