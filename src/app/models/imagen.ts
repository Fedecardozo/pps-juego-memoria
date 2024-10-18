export class Imagen {
  color: string;
  path: string;
  mostrar: boolean;

  constructor(color: string, path: string) {
    this.color = color;
    this.path = path;
    this.mostrar = false;
  }
}
