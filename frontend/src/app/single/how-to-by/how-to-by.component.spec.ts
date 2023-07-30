import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToByComponent } from './how-to-by.component';

describe('HowToByComponent', () => {
  let component: HowToByComponent;
  let fixture: ComponentFixture<HowToByComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HowToByComponent]
    });
    fixture = TestBed.createComponent(HowToByComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
