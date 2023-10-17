import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  isModalOpen = false;
  parametroCamara:number | undefined;

  constructor(private router:Router,
              private helper:HelperService,
              private activaredRouter:ActivatedRoute,
              private auth:AngularFireAuth
              ) { }

  ngOnInit(){
    this.parametroCamara = this.activaredRouter.snapshot.params['idcam'];
    
    
  }

  

  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }

  botonAsistencia(){
    this.router.navigateByUrl("asistencia");
  }

  

}
