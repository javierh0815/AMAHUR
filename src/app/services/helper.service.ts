import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertService:AlertController,
              private loadingController:LoadingController,
              private toastController:ToastController,
              private modalController:ModalController
              ) { }

  async showLoader(msg:string){
    var loader = await this.loadingController.create({
      cssClass:"loaderClass",
      message:msg,
      translucent:true
    });
    await loader.present();
    return loader;
  }

  async showAlert(msg:string,title:string){
    var alert = await this.alertService.create({cssClass:"alertClass",message:msg,header:title,buttons:['Aceptar']})
    await alert.present();
    return alert;
  }

  async showConfirm(msg:string,btnY:string,btnN:string){
    let promise = new Promise<boolean>(async (resolve) => {
      var alert = await this.alertService.create({cssClass:"",message:msg,buttons:[
        {
          text:btnY,
          handler:()=>{
            resolve(true);
          }
          
        },
        {
          text:btnN,
          handler:()=>{
            resolve(false);
          }
          
        }
        
      ]})
      await alert.present();
    })
    return promise;
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
