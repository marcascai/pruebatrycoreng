import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetaTopComponent } from './planeta-top.component';

describe('PlanetaTopComponent', () => {
  let component: PlanetaTopComponent;
  let fixture: ComponentFixture<PlanetaTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetaTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
