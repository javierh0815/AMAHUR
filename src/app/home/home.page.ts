import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  botonLogin(){
    this.router.navigateByUrl("/login");
  }

  botonCrearUsuario(){
    this.router.navigateByUrl("/crear-usuario");
  }
}
