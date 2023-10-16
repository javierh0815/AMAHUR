import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Preferences } from '@capacitor/preferences';

const keyStorageAsistencia = "asistenciaData";

@Injectable({
  providedIn: 'root'
})
export class AsistentesService {

  estudiante:any;
  

  constructor(private auth:AngularFireAuth) { }

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

  async guardarAsistencia(asistencia:any[]){
    const asistenciaStorage = await this.obtenerAsistencia();
    var asistenteToken = await this.auth.currentUser;
    for (const a of asistenciaStorage){
      if (asistenciaStorage.includes(this.estudiante.filter((e: {correo:string;})=>e.correo==asistenteToken?.email))){
        return;
      }
      else{
        asistencia.push(a);
      }
    }
    this.setAsistencia(keyStorageAsistencia,JSON.stringify(asistencia))
  }


}
