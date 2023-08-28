import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  botonUsuarioCreado(){
    this.router.navigateByUrl("/home");
  }


}
