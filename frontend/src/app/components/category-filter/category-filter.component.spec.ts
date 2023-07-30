import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryFilterComponent } from './category-filter.component';

describe('CategoryFilterComponent', () => {
  let component: CategoryFilterComponent;
  let fixture: ComponentFixture<CategoryFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryFilterComponent]
    });
    fixture = TestBed.createComponent(CategoryFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
