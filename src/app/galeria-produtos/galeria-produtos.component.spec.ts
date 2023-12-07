import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaProdutosComponent } from './galeria-produtos.component';

describe('GaleriaProdutosComponent', () => {
  let component: GaleriaProdutosComponent;
  let fixture: ComponentFixture<GaleriaProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GaleriaProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GaleriaProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
