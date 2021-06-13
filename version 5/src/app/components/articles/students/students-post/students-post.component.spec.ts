import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPostComponent } from './students-post.component';

describe('StudentsPostComponent', () => {
  let component: StudentsPostComponent;
  let fixture: ComponentFixture<StudentsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
