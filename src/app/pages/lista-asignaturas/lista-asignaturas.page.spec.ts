import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAsignaturasPage } from './lista-asignaturas.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('ListaAsignaturasPage', () => {
  let component: ListaAsignaturasPage;
  let fixture: ComponentFixture<ListaAsignaturasPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations:[ListaAsignaturasPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers:[ModalController,AngularDelegate]
    });
    fixture = TestBed.createComponent(ListaAsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
