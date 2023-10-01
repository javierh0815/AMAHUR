import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  correo:string = '';

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth
              ) { }

  ngOnInit() {
  }

  async botonRecuperarC(){
    const loader = await this.helper.showLoader("Cargando...");
    if (this.correo == '') {
      await loader.dismiss();
      this.helper.showAlert("Debe ingresar un correo","Error");
      return;
    }
    try {
      await this.auth.sendPasswordResetEmail(this.correo);
      await this.helper.showAlert("Debe revisar su correo","Información");
      await loader.dismiss();
      await this.router.navigateByUrl("login");
    } catch (error:any) {
      if (error.code == 'auth/invalid-email') {
        await loader.dismiss();
        await this.helper.showAlert("El correo no es el correcto.","Error");
      }
    }
  }

  }


