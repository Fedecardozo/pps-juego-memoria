import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  IonApp,
  IonRouterOutlet,
  IonIcon,
  IonButton,
  IonFabButton,
  IonFab,
} from '@ionic/angular/standalone';
import { UserService } from './services/user.service';
import { SplashScreen } from '@capacitor/splash-screen';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [IonFab, IonFabButton, IonButton, IonIcon, IonApp, IonRouterOutlet],
})
export class AppComponent {
  public router: Router = inject(Router);
  public auth: UserService = inject(UserService);
  constructor() {}

  ngOnInit(): void {
    this.router.navigateByUrl('splash');
  }

  ionViewDitEnter() {
    SplashScreen.hide();
  }

  async cerrarSesion() {
    await this.auth.cerrarSesion();
    this.router.navigateByUrl('/login');
  }
}
