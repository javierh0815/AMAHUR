import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.page.html',
  styleUrls: ['./lista-asignaturas.page.scss'],
})
export class ListaAsignaturasPage implements OnInit {
  

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth) { }

  ngOnInit() {
  }
/* 
  botonSeccion(){
    this.router.navigateByUrl("detalle-asignatura");
  } */ 
  
  botonSeccion(){
    this.helper.showModal(DetalleAsignaturaPage);
  }

  


  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }

}
