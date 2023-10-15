import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { HelperService } from './helper.service';
import { ModalController, ToastController } from '@ionic/angular';

  const keyStorageUser = "usuarioDatos";
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  public emailUser:string = '';

  constructor(private helper:HelperService,
              private toastController:ToastController,
              private modalController:ModalController) { }

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

  async showToast(msg:string,duracion:number=2000){
    var toast = await this.toastController.create({
      cssClass:"toastClass",
      message:msg,
      duration:duracion,
      position:"bottom",
      color:"dark"

    });
    await toast.present();
    return toast;
  }

  async showModal(componente:any,props:any={},hideable=false){
    var modal = await this.modalController.create({
      component:componente,
      cssClass:"modalClass",
      componentProps:props,
      backdropDismiss:hideable
    });
    await modal.present();
  }
  
}
