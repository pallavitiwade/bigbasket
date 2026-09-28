import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuicesComponent } from './juices.component';

describe('JuicesComponent', () => {
  let component: JuicesComponent;
  let fixture: ComponentFixture<JuicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
