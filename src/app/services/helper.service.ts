import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private alertService:AlertController,
              private loadingController:LoadingController
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


}
