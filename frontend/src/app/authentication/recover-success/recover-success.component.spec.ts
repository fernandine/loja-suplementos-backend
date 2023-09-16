import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverSuccessComponent } from './recover-success.component';

describe('RecoverSuccessComponent', () => {
  let component: RecoverSuccessComponent;
  let fixture: ComponentFixture<RecoverSuccessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverSuccessComponent]
    });
    fixture = TestBed.createComponent(RecoverSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
