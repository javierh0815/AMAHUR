import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre:string="";
  apellido:string="";
  correo:string="";
  pass:string="";
  passB:string="";

  constructor(private router:Router,
              private helper:HelperService,
              private storage:StorageService,
              private auth:AngularFireAuth
              ) { }

  ngOnInit() {
  }

  

  async botonReg(){
    const loader = await this.helper.showLoader("Cargando");
    if (this.correo == ''){
      await loader.dismiss();
      await this.helper.showAlert("Debe ingresar un correo","Error");
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
