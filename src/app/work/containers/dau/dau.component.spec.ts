import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DAUComponent } from './dau.component';

describe('DauComponent', () => {
  let component: DAUComponent;
  let fixture: ComponentFixture<DAUComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [DAUComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(DAUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
