import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptoComponent } from './compto.component';

describe('ComptoComponent', () => {
  let component: ComptoComponent;
  let fixture: ComponentFixture<ComptoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComptoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComptoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
