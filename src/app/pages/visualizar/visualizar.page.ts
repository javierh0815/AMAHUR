import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-visualizar',
  templateUrl: './visualizar.page.html',
  styleUrls: ['./visualizar.page.scss'],
})
export class VisualizarPage implements OnInit {

  constructor(private router:Router,private helper:HelperService,private animationCtrl: AnimationController) { }

  ngOnInit() {
  }

  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      this.router.navigateByUrl("login");
      }
  }

  detalleAsignatura(){
    this.router.navigateByUrl("detalle-asignatura");
   }

}
