import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasEncontradasComponent } from './mascotas-encontradas.component';

describe('MascotasEncontradasComponent', () => {
  let component: MascotasEncontradasComponent;
  let fixture: ComponentFixture<MascotasEncontradasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MascotasEncontradasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MascotasEncontradasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
