import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';
import { Resultado } from 'src/app/models/resultado';
import { Alert } from 'src/app/models/alert';
import { Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IonSpinner } from '@ionic/angular/standalone';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
  standalone: true,
  imports: [IonSpinner, CommonModule, FormsModule, RouterLink],
})
export class RankingPage implements OnInit {
  db: DbService = inject(DbService);
  res: Resultado[] = [];
  mejoresCinco: Resultado[] = [];
  spinner = true;
  router: Router = inject(Router);
  auth: UserService = inject(UserService);

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
          this.res.push(resAux);
        });
        this.res.sort((a, b) => parseInt(a.tiempo) - parseInt(b.tiempo));
        this.mejoresCinco = this.res.slice(0, 5);
        this.spinner = false;
        console.log(this.mejoresCinco);
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
}
