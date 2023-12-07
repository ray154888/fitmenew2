import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarinhoComponent } from './carinho.component';

describe('CarinhoComponent', () => {
  let component: CarinhoComponent;
  let fixture: ComponentFixture<CarinhoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarinhoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarinhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
