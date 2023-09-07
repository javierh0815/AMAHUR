import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';
import { Menu } from 'src/app/models/home';
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


  constructor(private router:Router,private helper:HelperService,private animationCtrl: AnimationController ) { }

  ngOnInit() {
    this.menuHome();
    setTimeout(this.simularCargaInformacion, 2000)
  }

  menuHome(){
    this.menuArray.push(
      {
        id:1,
        nombre:"Escanear",
        url:"/codqr/camara",
        icono:"camera-outline"

    },
    {
      id:2,
      nombre:"Visualizar",
      url:"/rs/lista-asignaturas",
      icono:"eye-outline"

  }
    )

  }

  simularCargaInformacion = () => {
    this.loading = false;
  }

   async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
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

