import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminProgramsComponent } from './admin-programs.component';

describe('AdminProgramsComponent', () => {
  let component: AdminProgramsComponent;
  let fixture: ComponentFixture<AdminProgramsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminProgramsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
