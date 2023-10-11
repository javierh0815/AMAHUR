import { Component, OnInit } from '@angular/core';
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
              private activaredRouter:ActivatedRoute
              ) { }

  ngOnInit(){
    this.parametroCamara = this.activaredRouter.snapshot.params['idcam'];
    console.log("Parámetro: ",this.parametroCamara);
    
  }

  

  async botonLogout(){
    var confirm = await this.helper.showConfirm("Confirmar cierre de sesión","Confirmar","Cancelar");
    if(confirm == true) {
      this.router.navigateByUrl("login");
      }
  }

  botonAsistencia(){
    this.router.navigateByUrl("asistencia");
  }

  

}
