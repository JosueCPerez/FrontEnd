import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrgaComponent } from './entrga.component';

describe('EntrgaComponent', () => {
  let component: EntrgaComponent;
  let fixture: ComponentFixture<EntrgaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrgaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrgaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
