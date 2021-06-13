import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebdevPostComponent } from './webdev-post.component';

describe('WebdevPostComponent', () => {
  let component: WebdevPostComponent;
  let fixture: ComponentFixture<WebdevPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebdevPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebdevPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
