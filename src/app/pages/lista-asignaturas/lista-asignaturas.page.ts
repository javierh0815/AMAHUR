import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AsistentesService } from 'src/app/services/asistentes.service';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.page.html',
  styleUrls: ['./lista-asignaturas.page.scss'],
})
export class ListaAsignaturasPage implements OnInit {
  
  asignaturaA: any[]=[];

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth,
              private asistencia:AsistentesService) { }

  ngOnInit() {
    this.informacionAsignaturas();
  }

 

  async informacionAsignaturas(){
    const asignaturasAsisten = await this.asistencia.obtenerAsistencia();

    if(asignaturasAsisten){
      this.asignaturaA = asignaturasAsisten;
      
    }else{
      return;
    }
  }


  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }

}
