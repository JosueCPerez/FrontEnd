import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoEntregaComponent } from './estado-entrega.component';

describe('EstadoEntregaComponent', () => {
  let component: EstadoEntregaComponent;
  let fixture: ComponentFixture<EstadoEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
