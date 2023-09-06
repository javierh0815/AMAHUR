import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaAsignaturasPageRoutingModule } from './lista-asignaturas-routing.module';

import { ListaAsignaturasPage } from './lista-asignaturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaAsignaturasPageRoutingModule
  ],
  declarations: [ListaAsignaturasPage]
})
export class ListaAsignaturasPageModule {}
