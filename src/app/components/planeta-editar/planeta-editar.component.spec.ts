import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaEditarComponent } from './planeta-editar.component';

describe('PlanetaEditarComponent', () => {
  let component: PlanetaEditarComponent;
  let fixture: ComponentFixture<PlanetaEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetaEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
