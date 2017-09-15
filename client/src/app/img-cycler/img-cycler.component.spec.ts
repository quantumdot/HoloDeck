import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgCyclerComponent } from './img-cycler.component';

describe('ImgCyclerComponent', () => {
  let component: ImgCyclerComponent;
  let fixture: ComponentFixture<ImgCyclerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImgCyclerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgCyclerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
