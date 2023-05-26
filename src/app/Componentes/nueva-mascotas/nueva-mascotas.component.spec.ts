import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaMascotasComponent } from './nueva-mascotas.component';

describe('NuevaMascotasComponent', () => {
  let component: NuevaMascotasComponent;
  let fixture: ComponentFixture<NuevaMascotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevaMascotasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevaMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
