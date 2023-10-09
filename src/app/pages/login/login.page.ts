import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { StorageService } from 'src/app/services/storage.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user:string="";
    pass:string="";

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth,
              private storage:StorageService
              ) { }

  

  ngOnInit() {}

  async botonIngresar(){
   const loader = await this.helper.showLoader("Cargando...");
   if (this.user == "") {
    await loader.dismiss();
    this.helper.showAlert("Debe ingresar un correo","Error");
    return;
   }
    if (this.pass == "") {
      await loader.dismiss();
      this.helper.showAlert("Debe ingresar una contraseña","Error");
      return; 
    }
    try {
      const req = await this.auth.signInWithEmailAndPassword(this.user,this.pass);
      this.storage.emailUser = this.user;
      await loader.dismiss();
      await this.router.navigateByUrl('menu');
    } catch (error:any) {
      if (error.code=='auth/invalid-email'){
        await loader.dismiss();
        await this.helper.showAlert("El correo ingresado no es válido","Error");
      }
      if (error.code=='auth/weak-password'){
        await loader.dismiss();
        await this.helper.showAlert("La contraseña no es lo suficientemente fuerte","Error");
      }
      if (error.code == 'auth/invalid-password'){
        await loader.dismiss();
        await this.helper.showAlert("Contraseña inválida","Error");
      }
      
    }

   
  }
  
  botonRecuperar(){
    this.router.navigateByUrl("/recuperar");
  }

  botonRegistrar(){
    this.router.navigateByUrl("registro");
  }

  


  
}
