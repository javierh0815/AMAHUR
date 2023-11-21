import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroPage } from './registro.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistroPage', () => {
  let component: RegistroPage;
  let http:HttpClientTestingModule;
  let fixture: ComponentFixture<RegistroPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations:[RegistroPage],
      imports: [HttpClientTestingModule,IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers:[ModalController,AngularDelegate]
    })

    fixture = TestBed.createComponent(RegistroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
