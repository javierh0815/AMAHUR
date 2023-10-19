import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard, MenuController } from '@ionic/angular';
import { Menu } from 'src/app/models/home';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Network } from '@capacitor/network';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;
  
  loading:boolean=true;

  menuArray:Menu[]=[];

  usuarioA:any;
  


  constructor(private router:Router,
              private helper:HelperService,
              private animationCtrl: AnimationController,
              private auth: AngularFireAuth,
              private menuCtrl:MenuController,
              private storage:StorageService
               ) { }

  ngOnInit() {
    this.menuHome();
    this.conexionInternet();
    setTimeout(this.simularCargaInformacion, 2000)
  }

  menu(){
    this.menuCtrl.toggle();
  }

  menuButtonClose(){
    this.menuCtrl.close();
  }

  async menuButtonUserProfile(){
    this.usuarioA = await this.storage.obtenerUser();
    const estudianteToken = await this.auth.currentUser;
    const usuarioF = this.usuarioA.find((e: {correo:string; }) => e.correo == estudianteToken?.email);
    const param = usuarioF.nombre;

    this.router.navigateByUrl('perfil-usuario/' + param);
  }

  async conexionInternet(){
    const status = await Network.getStatus();
    if (status.connected){
      this.helper.showToast("Estado de la Conexion: Conectado!");
      }else{
      this.helper.showToast("Estado de la Conexion: Desconectado...")  
      }
  }

  menuHome(){
    this.menuArray.push(
      {
        id:1,
        nombre:"Escanear",
        url:"/1/camara",
        icono:"camera-outline"
      },
      {
        id:2,
        nombre:"Visualizar",
        url:"/2/lista-asignaturas",
        icono:"eye-outline"
      }
    )

  }

  

  simularCargaInformacion = () => {
    this.loading = false;
  }

   async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesión?","Confirmar","Cancelar");
    if(confirm == true) {
      await this.auth.signOut();
      this.router.navigateByUrl("login");
      }
  }


    ngAfterViewInit(){
      this.animation =  this.animationCtrl.create()
      .addElement(document.querySelectorAll("ion-card"))
      .duration(1000)
      .iterations(8)
      .direction('alternate')
      .fromTo('background','white','#e1c1fb');
      this.animation.play()
    } 
   }

