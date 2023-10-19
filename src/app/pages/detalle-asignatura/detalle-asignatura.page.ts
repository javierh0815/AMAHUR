import { Component, Input, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AsistentesService } from 'src/app/services/asistentes.service';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {
  
  
  
  
  usuarioA:any;
  asisReg:any[]=[];
  
  
  
 
  constructor(private router:Router,
              private helper:HelperService,
              private modalController:ModalController,
              private asistentes:AsistentesService,
              private storage:StorageService,
              private auth:AngularFireAuth) { }

  ngOnInit() {
    this.mostrarInfo();
  }

  async mostrarInfo(){
    this.usuarioA = await this.asistentes.obtenerAsistencia();
    const estudianteToken = await this.auth.currentUser;
    const usuarioF = this.usuarioA.find((e: {correo:string; }) => e.correo == estudianteToken?.email);
    

    if (usuarioF){
      this.asisReg.push(usuarioF);
      
      
    }
      
      
      
  }
    
    
  

  cerrarModal(){
    this.modalController.dismiss();

  }

 

}
