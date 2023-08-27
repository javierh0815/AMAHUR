import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  

  constructor(private router:Router,private helper:HelperService) { }

  

  ngOnInit() {}

  botonIngresar(){
    this.router.navigateByUrl("/codigo");
  }
  
  botonRecuperar(){
    this.router.navigateByUrl("/recuperar");
  }

  


  
}
