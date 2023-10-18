import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AsistentesService } from 'src/app/services/asistentes.service';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {

  constructor(private router:Router,
              private helper:HelperService,
              private modalController:ModalController,
              private asistentes:AsistentesService) { }

  ngOnInit() {
  }

  cerrarModal(){
    this.modalController.dismiss();

  }

 

}
