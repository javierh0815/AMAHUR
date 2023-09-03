import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private router:Router,private helper:HelperService) { }

  ngOnInit() {
  }

   botonScan(){
    this.router.navigateByUrl("camara");
   }

   botonVisualizar(){
    this.router.navigateByUrl("registro");
   }

   async botonLogout(){
    var confirm = await this.helper.showConfirm("Confirmar cierre de sesión","Confirmar","Cancelar");
    if(confirm == true) {
      this.router.navigateByUrl("login");
      }
  }


   }

