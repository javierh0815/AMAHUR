import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from './helper.service';

  const keyStorageUser = "usuarioDatos";
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public emailUser:string = '';

  constructor(private authFire:AngularFireAuth,
              private helper:HelperService) { }

  async getItem(llave:string):Promise<string | null>{
    const obj = await Preferences.get({key:llave});
    return obj.value;
  }

  async setItem(llave:string, valor:string){
    await Preferences.set({key:llave,value:valor});
  }

  async obtenerUser(){
    const usuarios = await this.getItem(keyStorageUser);

    if (usuarios == null){
      return [];
    }
    const users = JSON.parse(usuarios);
    if (users){
      return users
    }else{
      return [];
    }
  }

  async guardarUser(usuario:any[]){
    const usuarioStorage = await this.obtenerUser();
    for (const i of usuarioStorage){
      if (i.correo === this.emailUser){
        this.helper.showAlert("Usuario ya existe en localstorage","Error");
        return;
      }else{
        usuario.push(i);
      }
    }
    this.setItem(keyStorageUser,JSON.stringify(usuario));
  }
  
}
