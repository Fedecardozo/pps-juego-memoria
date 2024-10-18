export class Resultado {
  user: string;
  tiempo: string;
  nivel: string;
  id: string;

  constructor(user: string, tiempo: string, nivel: string) {
    this.user = user;
    this.tiempo = tiempo;
    this.nivel = nivel;
    this.id = '';
  }
  setId(id: string) {
    this.id = id;
  }
}
