import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Home } from 'src/app/models/home';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  homeArray:Home[]=[];

  constructor(private router:Router) {}
  
  ngOnInit() {
    this.menuHome();
  }

  menuHome(){
    this.homeArray.push(
      {
        id:1,
        nombre:"Registrarse",
        url:"/crear-usuario",
        icono:"create"

    },
    {
      id:2,
      nombre:"Login",
      url:"/login",
      icono:"log-in"

  }
    )

  }

  
}
