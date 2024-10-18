import { Injectable } from '@angular/core';
import { Imagen } from '../models/imagen';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  back: boolean = true;

  constructor() {}

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
