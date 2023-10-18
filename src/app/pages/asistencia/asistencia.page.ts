import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { DetalleAsignaturaPage } from '../detalle-asignatura/detalle-asignatura.page';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { AsistentesService } from 'src/app/services/asistentes.service';

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
  correo:string ='';
  usuarioA:any;
  
  

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth,
              private modalC:ModalController,
              private storage:StorageService,
              private asistentes:AsistentesService) { }

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
    var confirm= await this.helper.showConfirm("¿Confirmar su registro como presente?","OK","Cancelar");

    if(confirm == true) {
      const loader = await this.helper.showLoader("Cargando...");
      const seleccionA = this.datosMalla.find(asignatura => asignatura.asignatura === this.seleccionAsignatura);
      this.usuarioA = await this.storage.obtenerUser();
      const estudianteToken = await this.auth.currentUser;
      const usuarioF = this.usuarioA.find((e: {correo:string; }) => e.correo == estudianteToken?.email);
      this.correo=usuarioF.correo;
      

      
      
      var presencia =  [{
        asignatura:seleccionA?.asignatura,
        docente:seleccionA?.docente,
        fecha:seleccionA?.fecha,
        hora:seleccionA?.hora,
        leccion:seleccionA?.leccion,
        sala:seleccionA?.sala,
        seccion:seleccionA?.seccion,
        correo:this.correo

      }]

      if (seleccionA){
        await loader.dismiss();
        
        this.asistentes.guardarAsistencia(presencia);
        
        
      }
      else{
        await loader.dismiss();
        await this.helper.showAlert("No se pudo guardar su asistencia","Error");
        return;
      }
      
        
      
    
      
      //this.helper.showModal(DetalleAsignaturaPage);
    }
  }

  cerrarModal(){
    this.modalC.dismiss();

  }

}
