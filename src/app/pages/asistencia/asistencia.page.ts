import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private router:Router,private helper:HelperService) { }

  ngOnInit() {
  }

  async botonLogout(){
    var confirm = await this.helper.showConfirm("Confirmar cierre de sesión","Confirmar","Cancelar");
    if(confirm == true) {
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
