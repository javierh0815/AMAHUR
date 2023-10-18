import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  @Input() datosMalla:any[]=[];

  seleccionAsignatura:string='';
  

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth,
              private modalC:ModalController) { }

  ngOnInit() {
    console.log("malla: ",this.datosMalla);
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
      const loader = await this.helper.showLoader("Cargando...");
      const seleccionA = this.datosMalla.find(asignatura => asignatura.asignatura === this.seleccionAsignatura);
      
      if(seleccionA){
        await loader.dismiss();
        const nomA = seleccionA.leccion;
        console.log("a",nomA);
      }
      
      //this.helper.showModal(DetalleAsignaturaPage);
    }
  }

  cerrarModal(){
    this.modalC.dismiss();

  }

}
