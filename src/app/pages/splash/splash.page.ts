import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
  standalone: true,
  imports: [],
})
export class SplashPage {
  public router: Router = inject(Router);
  authService: UserService = inject(UserService);

  constructor() {
    setTimeout(() => {
      this.authService.splash = true;

      this.router.navigateByUrl('/login');
    }, 2700);
  }
}