/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DadosJuridicoComponent } from './dados-juridico.component';

describe('DadosJuridicoComponent', () => {
  let component: DadosJuridicoComponent;
  let fixture: ComponentFixture<DadosJuridicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DadosJuridicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DadosJuridicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
