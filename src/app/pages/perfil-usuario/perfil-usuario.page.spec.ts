import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PerfilUsuarioPage } from './perfil-usuario.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

describe('PerfilUsuarioPage', () => {
  let component: PerfilUsuarioPage;
  let fixture: ComponentFixture<PerfilUsuarioPage>;
  

  beforeEach(() => {

    const activatedRouteStub = {
      snapshot: {
        params: {
          nombreuser: 'test',
        },
      },
      paramMap: new BehaviorSubject({}),
    };

    TestBed.configureTestingModule({
      declarations:[PerfilUsuarioPage],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers: [{ provide: ActivatedRoute, useValue: activatedRouteStub },ModalController,AngularDelegate]
    })

    fixture = TestBed.createComponent(PerfilUsuarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});