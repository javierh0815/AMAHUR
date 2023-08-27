import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { Login } from 'src/app/models/login';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginArray:Login[]=[];

  constructor(private router:Router,private helper:HelperService) { }

  

  ngOnInit() {
    this.menuLogin();
  }

  menuLogin(){
    this.loginArray.push(
      {
        id:1,
        nombre:"Ingresar",
        url:"/codigo"

      },
      {
      id:2,
      nombre:"Recuperar",
      url:"/recuperar"

      }
    )

  }


  
}
