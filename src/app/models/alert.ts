import Swal, { SweetAlertOptions } from 'sweetalert2';
import lottie from 'lottie-web';

export class Alert {
  private static base: SweetAlertOptions = {
    heightAuto: false,
    backdrop: true, // Esta opción asegura que el fondo sea oscuro
    allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
    confirmButtonText: 'Aceptar',
    background: '#310a6b',
    color: '#f5f2ff',
    customClass: {
      confirmButton: 'btn-ok',
      title: 'alert-title',
    },
  };

  static error(titulo: string, texto: string) {
    Swal.fire(Alert.base);
    Swal.update({
      icon: 'error',
      title: titulo,
      text: texto,
    });
  }

  static exito(titulo: string, texto: string) {
    return Swal.fire({
      imageUrl: 'assets/win.gif',
      imageHeight: 150,
      title: titulo,
      html: texto,
      heightAuto: false,
      backdrop: true, // Esta opción asegura que el fondo sea oscuro
      allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
      confirmButtonText: 'Seguir jugando',
      showCancelButton: true,
      cancelButtonText: 'Salir',
      background: '#310a6b',
      color: '#f5f2ff',
      customClass: {
        cancelButton: 'btn-cancel',
        title: 'sin-padding',
      },
    });
  }

  static warning(titulo: string, texto: string) {
    return Swal.fire({
      icon: 'question',
      title: titulo,
      text: texto,
      heightAuto: false,
      backdrop: true, // Esta opción asegura que el fondo sea oscuro
      allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
      confirmButtonText: 'Si',
      showCancelButton: true,
      cancelButtonText: 'No',
      background: '#310a6b',
      color: '#f5f2ff',
      customClass: {
        cancelButton: 'btn-cancel',
        title: 'sin-padding',
      },
    });
  }
}
