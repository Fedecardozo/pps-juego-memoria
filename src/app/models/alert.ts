import Swal, { SweetAlertOptions } from 'sweetalert2';

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
      icon: 'success',
      title: titulo,
      text: texto,
      heightAuto: false,
      backdrop: true, // Esta opción asegura que el fondo sea oscuro
      allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
      confirmButtonText: 'Seguir jugando',
      showCancelButton: true,
      cancelButtonText: 'Salir',
      background: '#310a6b',
      color: '#f5f2ff',
      customClass: {
        confirmButton: 'btn-ok',
        title: 'alert-title',
      },
    });
  }

  static bien(titulo: string, texto: string) {
    Swal.fire({
      icon: 'success',
      title: titulo,
      text: texto,
      heightAuto: false,
      backdrop: true, // Esta opción asegura que el fondo sea oscuro
      allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
      showConfirmButton: false,
      background: '#310a6b',
      color: '#f5f2ff',
      timer: 1000,
      customClass: {
        confirmButton: 'btn-ok',
        title: 'alert-title',
      },
    });
  }

  static mal(titulo: string, texto: string) {
    Swal.fire({
      icon: 'error',
      title: titulo,
      text: texto,
      heightAuto: false,
      backdrop: true, // Esta opción asegura que el fondo sea oscuro
      allowOutsideClick: false, // Impide cerrar al hacer clic fuera del modal
      showConfirmButton: false,
      background: '#310a6b',
      color: '#f5f2ff',
      timer: 1000,
      customClass: {
        confirmButton: 'btn-ok',
        title: 'alert-title',
      },
    });
  }
}
