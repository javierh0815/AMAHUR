import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleAsignaturaPage } from './detalle-asignatura.page';
import { AngularDelegate, ModalController } from '@ionic/angular';

describe('DetalleAsignaturaPage', () => {
  let component: DetalleAsignaturaPage;
  let fixture: ComponentFixture<DetalleAsignaturaPage>;

  beforeEach(() => {

    TestBed.configureTestingModule({
      declarations:[DetalleAsignaturaPage],
      providers:[ModalController,AngularDelegate]
    });

    fixture = TestBed.createComponent(DetalleAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
