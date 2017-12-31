import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmokeoutComponent } from './smokeout.component';

describe('SmokeoutComponent', () => {
  let component: SmokeoutComponent;
  let fixture: ComponentFixture<SmokeoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmokeoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmokeoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
