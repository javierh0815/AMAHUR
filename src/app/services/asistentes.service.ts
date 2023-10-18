import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { StorageService } from './storage.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const keyStorageAsistencia = "asistenciaData";

@Injectable({
  providedIn: 'root'
})
export class AsistentesService {

  estudiantes:any;
  
  

  constructor(private storage:StorageService,
              private auth:AngularFireAuth ) { }

  async getAsistencia(clave:string):Promise<string | null>{
    const asi = await Preferences.get({key:clave});
    return asi.value;
  }

  async setAsistencia(clave:string,contenido:string){
    await Preferences.set({key:clave,value:contenido});
  }

  async obtenerAsistencia(){
    const asistentes = await this.getAsistencia(keyStorageAsistencia);
    if (asistentes == null){
      return[];
    }
    const asist = JSON.parse(asistentes);

    if(asist){
      return asist;
    }else{
      return [];
    }
  }


  async guardarAsistencia(presentes:any[]){
    const asistStorage = await this.obtenerAsistencia();
    this.estudiantes = await this.storage.obtenerUser();
    const etoken = await this.auth.currentUser;
    const estudianteLogin = this.estudiantes.find((e: {correo:string; }) => e.correo == etoken?.email);
    
    if(estudianteLogin){
      const emailE = estudianteLogin.correo;
      let estudiantePresente = false;

      for (const i of asistStorage){
        if (i.correo === emailE){
          estudiantePresente = true;
          
          return;
        }else{
          presentes.push(i)
        }
      }
      this.setAsistencia(keyStorageAsistencia,JSON.stringify(presentes));
    }

 }


}
