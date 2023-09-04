import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

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

  constructor(private router:Router,private helper:HelperService) { }

  ngOnInit() {
  }

  

  botonReg(){
    if (this.nombre == ""){
      this.helper.showAlert("Debe ingresar un nombre","Error");
      return;
    }
    if(this.apellido == ""){
      this.helper.showAlert("Debe ingresar un apellido","Error");
      return;
    }
    if(this.correo == ""){
      this.helper.showAlert("Debe ingresar un correo","Error");
      return;
    }
    if(this.pass == ""){
      this.helper.showAlert("Debe ingresar una contraseña","Error");
      return;
    }
    if(this.passB == ""){
      this.helper.showAlert("Debe confirmar su contraseña","Error");
      return;
    }
    if(this.pass !== this.passB){
      this.helper.showAlert("Las contraseñas deben ser iguales","Error");
      return;
    }
    else {
      this.helper.showAlert("Registro exitoso. Volviendo a la pantalla de Login...","Exito");
      this.router.navigateByUrl("login");
      return;
    }
  }

}
