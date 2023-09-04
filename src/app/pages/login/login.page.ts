import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    user:string="";
    pass:string="";

  constructor(private router:Router,private helper:HelperService) { }

  

  ngOnInit() {}

  botonIngresar(){
    

    if (this.user == ""){
      
      this.helper.showAlert("Debe ingresar un usuario","Error");
      return;
    }
    if (this.pass == ""){
      this.helper.showAlert("Debe ingresar una contraseña","Error");
      return;
    }
    if (this.user == "pgy4121001d" && this.pass == "pgy4121001d"){
      this.helper.showAlert('¡Bienvenido, ' + this.user + '!',"Login Exitoso")
      this.router.navigateByUrl("menu");

    }
    
    
    
    
  }
  
  botonRecuperar(){
    this.router.navigateByUrl("/recuperar");
  }

  botonRegistrar(){
    this.router.navigateByUrl("registro");
  }

  


  
}
