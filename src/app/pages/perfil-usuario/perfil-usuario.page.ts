import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-perfil-usuario',
  templateUrl: './perfil-usuario.page.html',
  styleUrls: ['./perfil-usuario.page.scss'],
})
export class PerfilUsuarioPage implements OnInit {

  estudiante:any;
  estudianteR:any;
  parametroUsuario:string | undefined;

  constructor(private activatedRouter:ActivatedRoute,
              private auth:AngularFireAuth,
              private router:Router,
              private helper:HelperService,
              private storage:StorageService) { }

  ngOnInit() {
    this.parametroUsuario= this.activatedRouter.snapshot.params['nombreuser'];
    this.infoUsuario();
  }

  async infoUsuario(){
    this.estudiante = await this.storage.obtenerUser();
    var tokenEstudiante = await this.auth.currentUser;
    this.estudianteR = this.estudiante.filter((e: {correo:string; }) => e.correo == tokenEstudiante?.email);
    


  }

  async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesión?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }
}
