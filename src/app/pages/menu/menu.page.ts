import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonButton } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  @ViewChild(IonButton, { read: ElementRef })
  card!: ElementRef<HTMLIonButtonElement>;

  private animation!: Animation;


  constructor(private router:Router,private helper:HelperService,private animationCtrl: AnimationController ) { }

  ngOnInit() {
  }

   botonScan(){
    this.router.navigateByUrl("camara");
   }

   botonVisualizar(){
    this.router.navigateByUrl("registro");
   }

   async botonLogout(){
    var confirm = await this.helper.showConfirm("¿Deseas cerrar la sesion?","Confirmar","Cancelar");
    if(confirm == true) {
      this.router.navigateByUrl("login");
      }
  }
  ngAfterViewInit(){
  this.animation =  this.animationCtrl.create()
  .addElement(document.querySelectorAll("ion-button"))
  .duration(1000)
  .iterations(4)
  .direction('alternate')
  .fromTo('--background','#AC8BEE','#573D7F');
  this.animation.play()
}

   }

