import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  private melody = new Audio('assets/sounds/game.mp3');
  private soundPause = new Audio('assets/sounds/pause.mp3');
  private soundPlay = new Audio('assets/sounds/play.mp3');
  private ganar = new Audio('assets/sounds/ganar.mp3');
  private vuelta = new Audio('assets/sounds/vuelta.mp3');
  private start = new Audio('assets/sounds/start.mp3');
  sonido: boolean = true;

  constructor() {}

  actDescSound(act: boolean) {
    this.sonido = act;
    this.melody.volume = act ? 1 : 0;
    this.soundPause.volume = act ? 1 : 0;
    this.soundPlay.volume = act ? 1 : 0;
    this.ganar.volume = act ? 1 : 0;
    this.vuelta.volume = act ? 1 : 0;
    this.start.volume = act ? 1 : 0;
  }

  pausarMelodia() {
    this.melody.pause();
  }

  playMelodia() {
    this.melody.loop = true; // Reproduce en bucle
    this.melody.play();
  }
  pausar() {
    this.soundPause.play();
    this.melody.pause();
  }

  renaudar() {
    this.soundPlay.play();
    this.melody.play();
  }

  darVuelta() {
    this.vuelta.play();
  }

  playGanar() {
    this.ganar.play();
  }

  playStart() {
    this.start.play();
  }

  desordenarArray(array: Imagen[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Intercambia elementos
    }
    return array;
  }

  timer(callback: Function) {
    // Ejecuta la función cada 1 segundo (1000 milisegundos)
    let contador = 0;
    const timer = setInterval(function () {
      contador++;
      console.log('Segundos: ' + contador);

      // Detiene el timer después de 10 segundos
      if (callback()) {
        console.log('se detuvo el tiempo');
        clearInterval(timer); // Detener el interval
      }
    }, 1000);
  }
}
