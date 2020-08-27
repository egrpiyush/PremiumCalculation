import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculationPremiumComponent } from './calculation-premium.component';

describe('CalculationPremiumComponent', () => {
  let component: CalculationPremiumComponent;
  let fixture: ComponentFixture<CalculationPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculationPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
