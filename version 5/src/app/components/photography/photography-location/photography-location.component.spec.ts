import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotographyLocationComponent } from './photography-location.component';

describe('PhotographyLocationComponent', () => {
  let component: PhotographyLocationComponent;
  let fixture: ComponentFixture<PhotographyLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotographyLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotographyLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
