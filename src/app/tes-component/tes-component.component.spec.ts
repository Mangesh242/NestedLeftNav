import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesComponentComponent } from './tes-component.component';

describe('TesComponentComponent', () => {
  let component: TesComponentComponent;
  let fixture: ComponentFixture<TesComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
