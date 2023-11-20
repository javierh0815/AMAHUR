import { TestBed } from '@angular/core/testing';
import { AsistentesService } from './asistentes.service';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';

describe('AsistentesService', () => {
  let service: AsistentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[ModalController, AngularDelegate],
      imports: [IonicModule.forRoot(),AngularFireModule.initializeApp(environment.firebaseConfig)]
    });
    service = TestBed.inject(AsistentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
