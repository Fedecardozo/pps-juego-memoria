export class Resultado {
  user: string;
  tiempo: string;
  fecha: string;
  nivel: string;
  id: string;

  constructor(user: string, tiempo: string, nivel: string, fecha: string) {
    this.user = user;
    this.tiempo = tiempo;
    this.nivel = nivel;
    this.fecha = fecha;
    this.id = '';
  }
  setId(id: string) {
    this.id = id;
  }
}
