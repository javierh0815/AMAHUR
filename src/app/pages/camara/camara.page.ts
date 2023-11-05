import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AsistenciaPage } from '../asistencia/asistencia.page';
import { BarcodeScanner } from 'capacitor-barcode-scanner';
import { DatosMalla } from 'src/app/models/datosMalla';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  isModalOpen = false;
  parametroCamara:number | undefined;
  usuarioA:any;
  

  

  constructor(private router:Router,
              private helper:HelperService,
              private activaredRouter:ActivatedRoute,
              private auth:AngularFireAuth,
              private storage:StorageService
              
              ) { }

  ngOnInit(){
    this.parametroCamara = this.activaredRouter.snapshot.params['idcam'];
    
    
  }

  

  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }

  async botonAsistencia(){
    var datosAsignatura = (await BarcodeScanner.scan()).code;
    if (datosAsignatura){

      const infoClase = JSON.parse(datosAsignatura);

      this.usuarioA = await this.storage.obtenerUser();
      const estudianteToken = await this.auth.currentUser;
      const usuarioF = this.usuarioA.find((e: {correo:string; }) => e.correo == estudianteToken?.email);
      const correoA = usuarioF.correo;

      infoClase.correo = correoA;

      

      


      const infoCamara = {datosMalla:infoClase};



      this.helper.showModal(AsistenciaPage,infoCamara);
      

      
    }
     
  }

  

}
