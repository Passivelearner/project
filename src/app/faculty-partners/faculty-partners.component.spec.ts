import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyPartnersComponent } from './faculty-partners.component';

describe('FacultyPartnersComponent', () => {
  let component: FacultyPartnersComponent;
  let fixture: ComponentFixture<FacultyPartnersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyPartnersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FacultyPartnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
