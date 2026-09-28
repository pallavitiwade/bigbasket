import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshFruitComponent } from './fresh-fruit.component';

describe('FreshFruitComponent', () => {
  let component: FreshFruitComponent;
  let fixture: ComponentFixture<FreshFruitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshFruitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreshFruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
