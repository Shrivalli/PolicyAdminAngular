import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllUserComponent } from './view-all-user.component';

describe('ViewAllUserComponent', () => {
  let component: ViewAllUserComponent;
  let fixture: ComponentFixture<ViewAllUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
