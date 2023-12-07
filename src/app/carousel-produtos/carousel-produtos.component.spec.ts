import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselProdutosComponent } from './carousel-produtos.component';

describe('CarouselProdutosComponent', () => {
  let component: CarouselProdutosComponent;
  let fixture: ComponentFixture<CarouselProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
