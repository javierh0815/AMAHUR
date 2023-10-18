import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  @Input() datosMalla:any[]=[];

  seleccionAsignatura:string='';
  docente:string='';
  fecha:string='';
  hora:string='';
  leccion:string='';
  sala:string='';
  seccion:string='';
  correoA:string='';
  correoEstudiante:string='';
  usuarioA:any;
  
  

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth,
              private modalC:ModalController,
              private storage:StorageService) { }

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
      this.usuarioA = await this.storage.obtenerUser();
      const estudianteToken = await this.auth.currentUser;
      const usuarioF = this.usuarioA.find((e: {correo:string; }) => e.correo == estudianteToken?.email);
      this.correoEstudiante = usuarioF.correo;

      if(seleccionA){
        await loader.dismiss();
        const nomA = seleccionA.leccion;
        
        console.log("a",nomA,"c",this.correoEstudiante);
      }

      
      var presencia =  [{
        asignatura:seleccionA.leccion,
        docente:seleccionA?.docente,
        fecha:seleccionA?.fecha,
        hora:seleccionA?.hora,
        leccion:seleccionA?.leccion,
        sala:seleccionA?.sala,
        seccion:seleccionA?.seccion,
        correo:this.correoEstudiante

      }]
      console.log(presencia);
      
      
      //this.helper.showModal(DetalleAsignaturaPage);
    }
  }

  cerrarModal(){
    this.modalC.dismiss();

  }

}
