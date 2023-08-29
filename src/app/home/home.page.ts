import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import type { Animation } from '@ionic/angular';
import { Home } from 'src/app/models/home';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonCard, { read: ElementRef })
  card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  homeArray:Home[]=[];

  constructor(private router:Router, private animationCtrl: AnimationController) {}
  
  ngOnInit() {
    this.menuHome();
  }

  menuHome(){
    this.homeArray.push(
      {
        id:1,
        nombre:"Registrarse",
        url:"/crear-usuario",
        icono:"create"

    },
    {
      id:2,
      nombre:"Login",
      url:"/login",
      icono:"log-in"

  }
    )

  }

  ngAfterViewInit(){
    this.animation =  this.animationCtrl.
    create()
    .addElement(document.querySelectorAll("ion-card .array-boton"))
    .duration(1000)
    .iterations(Infinity)
    .direction('alternate')
    .fromTo('background','#AC8BEE','var(--ion-item-background)');


  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }

  
}
