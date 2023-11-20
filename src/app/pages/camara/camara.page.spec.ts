import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaraPage } from './camara.page';
import { AngularDelegate, IonicModule, ModalController } from '@ionic/angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';


describe('CamaraPage', () => {
  let component: CamaraPage;
  let fixture: ComponentFixture<CamaraPage>;

  beforeEach(() => {
    
    const activatedRouteStub = {
      snapshot: {
        params: {
          idcam: 1,
        },
      },
      paramMap: new BehaviorSubject({}),
    };

    TestBed.configureTestingModule({
      declarations:[CamaraPage],
      imports: [IonicModule.forRoot(),        AngularFireModule.initializeApp(environment.firebaseConfig)],
      providers:[{ provide: ActivatedRoute, useValue: activatedRouteStub },ModalController,AngularDelegate]
    });

    fixture = TestBed.createComponent(CamaraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
