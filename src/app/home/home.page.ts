import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonFab,
  IonFabButton,
} from '@ionic/angular/standalone';
import { Alert } from '../models/alert';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonFabButton,
    IonFab,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    RouterLink,
  ],
})
export class HomePage {
  public router: Router = inject(Router);
  public auth: UserService = inject(UserService);
  constructor() {}
  async cerrarSesion() {
    Alert.warning('¿Desea cerrar sesión?', '').then(async (res) => {
      if (res.isConfirmed) {
        await this.auth.cerrarSesion();
        this.router.navigateByUrl('/login');
      }
    });
  }
}
