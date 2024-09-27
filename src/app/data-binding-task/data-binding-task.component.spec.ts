import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataBindingTaskComponent } from './data-binding-task.component';

describe('DataBindingTaskComponent', () => {
  let component: DataBindingTaskComponent;
  let fixture: ComponentFixture<DataBindingTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataBindingTaskComponent]
    });
    fixture = TestBed.createComponent(DataBindingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
