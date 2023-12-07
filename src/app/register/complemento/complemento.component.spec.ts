/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ComplementoComponent } from './complemento.component';

describe('ComplementoComponent', () => {
  let component: ComplementoComponent;
  let fixture: ComponentFixture<ComplementoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplementoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplementoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
