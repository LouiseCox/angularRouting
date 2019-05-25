import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrigamiComponent } from './origami.component';

describe('OrigamiComponent', () => {
  let component: OrigamiComponent;
  let fixture: ComponentFixture<OrigamiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrigamiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrigamiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
