import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';

@Component({
  selector: 'app-lista-asignaturas',
  templateUrl: './lista-asignaturas.page.html',
  styleUrls: ['./lista-asignaturas.page.scss'],
})
export class ListaAsignaturasPage implements OnInit {
  

  constructor(private router:Router,private helper:HelperService) { }

  ngOnInit() {
  }

  botonSeccion(){
    this.router.navigateByUrl("detalle-asignatura");
  } 
  


  async botonLogout(){
    var confirm = await this.helper.showConfirm("Confirmar cierre de sesión","Confirmar","Cancelar");
    if(confirm == true) {
      this.router.navigateByUrl("login");
      }
  }

}
