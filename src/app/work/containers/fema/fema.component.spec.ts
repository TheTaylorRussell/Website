import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FEMAComponent } from './fema.component';

describe('FemaComponent', () => {
  let component: FEMAComponent;
  let fixture: ComponentFixture<FEMAComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [FEMAComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FEMAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
