import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YoGabbaGabbaComponent } from './yogabba.component';

describe('YoGabbaGabbaComponent', () => {
  let component: YoGabbaGabbaComponent;
  let fixture: ComponentFixture<YoGabbaGabbaComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [YoGabbaGabbaComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(YoGabbaGabbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
