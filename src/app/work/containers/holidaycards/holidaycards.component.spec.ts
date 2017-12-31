import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCardsComponent } from './holidaycards.component';

describe('HolidaycardsComponent', () => {
  let component: HolidayCardsComponent;
  let fixture: ComponentFixture<HolidayCardsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HolidayCardsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
