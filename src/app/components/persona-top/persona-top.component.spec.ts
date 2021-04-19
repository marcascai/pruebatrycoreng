import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaTopComponent } from './persona-top.component';

describe('PersonaTopComponent', () => {
  let component: PersonaTopComponent;
  let fixture: ComponentFixture<PersonaTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonaTopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonaTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
