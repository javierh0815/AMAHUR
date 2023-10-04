import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Comuna } from 'src/app/models/apiComuna';
import { Region } from 'src/app/models/apiRegion';
import { HelperService } from 'src/app/services/helper.service';
import { LocationService } from 'src/app/services/location.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  // nombre:string="";
  // apellido:string="";

  correo:string="";
  pass:string="";
  passB:string="";
  regiones:Region[]=[];
  comunas:Comuna[]=[];
  seleccionR:number = 0;
  seleccionC:number = 0;
  disComuna:boolean = true;

  constructor(private router:Router,
              private helper:HelperService,
              private storage:StorageService,
              private auth:AngularFireAuth,
              private locationService:LocationService
              ) { }

  ngOnInit() {
    this.cargarRegion();
  }

  async cargarRegion(){
    const req = await this.locationService.getRegion();
    this.regiones = req.data;
    console.log("REGIONES",this.regiones);
  }

  async cargarComuna(){
    try {
      const req = await this.locationService.getComuna(this.seleccionR);
      this.comunas = req.data;
      this.disComuna = false;
    } catch (error:any) {
      await this.helper.showAlert(error.error.msg,"Error");
      
    }
  }
  

  async botonReg(){
    const loader = await this.helper.showLoader("Cargando");
    if (this.correo == ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar un correo","Error");
      return;
    }
    if (this.pass == ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar una contraseña","Error");
      return;
    }
    if (this.passB == ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe confirmar su contraseña","Error");
      return;
    }
    if (this.pass != this.passB){
      await loader.dismiss();
      await this.helper.showAlert("Las contraseñas que ha ingresado no son iguales","Error");
      return;
    }
    var user = [{
      correo:this.correo,
      pass:this.pass
    }]

    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.correo,this.pass);
      await this.storage.guardarUser(user);
      await this.router.navigateByUrl("login");
      await loader.dismiss();
      await this.helper.showAlert("Usuario Registrado Correctamente","Éxito");
    }catch(error:any){
      if (error.code == 'auth/email-already-in-use'){
        await loader.dismiss();
        await this.helper.showAlert("El correo ya está en uso","Error");
      }
      if (error.code == 'auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("Email inválido","Error");
      }
    }

  }

}
