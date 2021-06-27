import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodingPostComponent } from './coding-post.component';

describe('CodingPostComponent', () => {
  let component: CodingPostComponent;
  let fixture: ComponentFixture<CodingPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodingPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodingPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
