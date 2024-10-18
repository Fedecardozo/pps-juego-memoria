import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Resultado } from '../models/resultado';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private firestore: AngularFirestore) {}

  //Agregar una resultados a la base de datos
  async agregarResultado(resultado: Resultado) {
    const colImagenes = this.firestore.collection('resultados');
    const documento = colImagenes.doc();
    resultado.setId(documento.ref.id);
    await documento.set({ ...resultado });
  }

  //Obtener las imagenes
  getResultado() {
    const col = this.firestore.collection('resultados');
    return col;
  }
}
