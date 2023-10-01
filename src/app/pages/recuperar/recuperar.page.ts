import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  correo:string = '';

  constructor(private router:Router,
              private helper:HelperService,
              private auth:AngularFireAuth
              ) { }

  ngOnInit() {
  }

  botonRecuperarC(){
    

  }

}
