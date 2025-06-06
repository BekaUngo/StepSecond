import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationFormComponent } from './confirmation-form.component';

describe('ConfirmationFormComponent', () => {
  let component: ConfirmationFormComponent;
  let fixture: ComponentFixture<ConfirmationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationFormComponent]
    });
    fixture = TestBed.createComponent(ConfirmationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
