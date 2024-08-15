import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskeditPage } from './taskedit.page';

describe('TaskeditPage', () => {
  let component: TaskeditPage;
  let fixture: ComponentFixture<TaskeditPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskeditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
