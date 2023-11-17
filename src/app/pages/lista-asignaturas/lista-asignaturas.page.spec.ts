import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAsignaturasPage } from './lista-asignaturas.page';

describe('ListaAsignaturasPage', () => {
  let component: ListaAsignaturasPage;
  let fixture: ComponentFixture<ListaAsignaturasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAsignaturasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
