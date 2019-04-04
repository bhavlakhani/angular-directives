import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerstyleComponent } from './serverstyle.component';

describe('ServerstyleComponent', () => {
  let component: ServerstyleComponent;
  let fixture: ComponentFixture<ServerstyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerstyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerstyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
