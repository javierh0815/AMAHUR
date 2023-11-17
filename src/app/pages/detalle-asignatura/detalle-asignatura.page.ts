import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DatosMalla } from 'src/app/models/datosMalla';


@Component({
  selector: 'app-detalle-asignatura',
  templateUrl: './detalle-asignatura.page.html',
  styleUrls: ['./detalle-asignatura.page.scss'],
})
export class DetalleAsignaturaPage implements OnInit {
  
  
  
  
  @Input() personaPresente:DatosMalla[]=[];
  asisReg:any[]=[];
  
  
  
 
  constructor(
              private modalController:ModalController
              ) { }

  ngOnInit() {
    this.mostrarInfo();
  }

  async mostrarInfo(){
    
    const datosDetalle = this.personaPresente;
    
    if (datosDetalle){
      this.asisReg.push(datosDetalle);
    }
      
      
      
  }
    
    
  

  cerrarModal(){
    this.modalController.dismiss();

  }

 

}
