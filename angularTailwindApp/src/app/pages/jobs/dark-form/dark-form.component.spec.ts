import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkFormComponent } from './dark-form.component';

describe('DarkFormComponent', () => {
  let component: DarkFormComponent;
  let fixture: ComponentFixture<DarkFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DarkFormComponent]
    });
    fixture = TestBed.createComponent(DarkFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
