import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Resultado } from 'src/app/models/resultado';
import { Alert } from 'src/app/models/alert';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {
  IonSpinner,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { ListDificilPage } from './list-dificil/list-dificil.page';
import { ListFacilPage } from './list-facil/list-facil.page';
import { ListMedioPage } from './list-medio/list-medio.page';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone: true,
  imports: [
    IonIcon,
    IonTabButton,
    IonTabBar,
    IonTabs,
    IonSpinner,
    CommonModule,
    FormsModule,
    RouterLink,
    ListDificilPage,
    ListFacilPage,
    ListMedioPage,
  ],
})
export class RankingPage implements OnInit {
  db: DbService = inject(DbService);
  res: Resultado[] = [];
  mejoresCinco: Resultado[] = [];
  mejoresCincoMedio: Resultado[] = [];
  mejoresCincoDificl: Resultado[] = [];
  spinner = true;
  router: Router = inject(Router);
  auth: UserService = inject(UserService);
  nivel: number = 0;

  constructor() {}

  ngOnInit() {
    this.db
      .getResultado()
      .valueChanges()
      .subscribe((next) => {
        const aux = next as Resultado[];
        aux.forEach((item) => {
          const resAux = new Resultado(
            item.user,
            item.tiempo,
            item.nivel,
            item.fecha
          );
          this.cargarArray(resAux);
        });
        // this.res.sort((a, b) => parseInt(a.tiempo) - parseInt(b.tiempo));
        // this.mejoresCinco = this.res.slice(0, 5);
        this.spinner = false;
        // console.log(this.mejoresCinco);
        // console.log(this.mejoresCincoMedio);
        // console.log(this.mejoresCincoDificl);
      });
  }

  async cerrarSesion() {
    Alert.warning('¿Desea cerrar sesión?', '').then(async (res) => {
      if (res.isConfirmed) {
        await this.auth.cerrarSesion();
        this.router.navigateByUrl('/login');
      }
    });
  }

  cambiarNivel(number: number) {
    this.nivel = number;
  }

  cargarArray(res: Resultado) {
    switch (res.nivel) {
      case 'facil':
        this.mejoresCinco.push(res);
        break;
      case 'medio':
        this.mejoresCincoMedio.push(res);
        break;
      case 'dificil':
        this.mejoresCincoDificl.push(res);
        break;
    }
  }
}
