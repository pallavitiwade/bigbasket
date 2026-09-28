import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitBoxComponent } from './fruit-box.component';

describe('FruitBoxComponent', () => {
  let component: FruitBoxComponent;
  let fixture: ComponentFixture<FruitBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FruitBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FruitBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
