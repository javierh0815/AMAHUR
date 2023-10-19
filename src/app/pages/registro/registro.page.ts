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

  

  correo:string="";
  pass:string="";
  passB:string="";
  nombre:string= '';
  apellido:string='';
  regiones:Region[]=[];
  comunas:Comuna[]=[];
  seleccionR:number = 0;
  seleccionC:number = 0;
  nombreRegion:string = '';
  nombreComuna:string = '';
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
    const regionSelect = this.regiones.find(region => region.id ===this.seleccionR);
    const comunaSelect = this.comunas.find(comuna => comuna.id === this.seleccionC);

    if (regionSelect && comunaSelect){
      this.nombreRegion = regionSelect.nombre;
      this.nombreComuna = comunaSelect?.nombre;
    }else{
      await loader.dismiss();
      await this.helper.showAlert("Debe seleccionar región y comuna correctamente","Error");
      return;
    }
    if (this.correo === ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar un correo","Error");
      return;
    }
    if (this.pass === ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar una contraseña","Error");
      return;
    }
    if (this.passB === ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe confirmar su contraseña","Error");
      return;
    }
    if (this.pass != this.passB){
      await loader.dismiss();
      await this.helper.showAlert("Las contraseñas que ha ingresado no son iguales","Error");
      return;
    }
    if (this.nombre === '') {
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar un nombre","Error");
      return;
      
    }
    if (this.apellido ==='') {
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar un apellido","Error");
      return;
    }
    
    var user = [{
      nombre:this.nombre,
      apellido:this.apellido,
      correo:this.correo,
      pass:this.pass,
      nombreR:this.nombreRegion,
      nombreC:this.nombreComuna
    }]

    try {
      const request = await this.auth.createUserWithEmailAndPassword(this.correo,this.pass);
      this.storage.emailUser = this.correo;
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
      if (error.code == 'auth/invalid-password'){
        await loader.dismiss();
        await this.helper.showAlert("Contraseña inválida","Error");
      }
    }

  }

}
