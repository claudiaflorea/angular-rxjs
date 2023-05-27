import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsUsersComponent } from './rxjs-users.component';

describe('RxjsUsersComponent', () => {
  let component: RxjsUsersComponent;
  let fixture: ComponentFixture<RxjsUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RxjsUsersComponent]
    });
    fixture = TestBed.createComponent(RxjsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
