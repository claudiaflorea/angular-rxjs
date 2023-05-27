import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsBankComponent } from './rxjs-bank.component';

describe('RxjsBankComponent', () => {
  let component: RxjsBankComponent;
  let fixture: ComponentFixture<RxjsBankComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsBankComponent]
    });
    fixture = TestBed.createComponent(RxjsBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
