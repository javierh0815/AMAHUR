import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth) { }

  ngOnInit() {
  }

  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }

  async botonPresente(){
    var confirm= await this.helper.showConfirm("Confirmar su registro como presente","OK","Cancelar");
    if(confirm == true) {
      this.helper.showModal(DetalleAsignaturaPage);
    }
  }

}
