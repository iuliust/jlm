/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ChapitreComponent } from './chapitre.component';

describe('ChapitreComponent', () => {
  let component: ChapitreComponent;
  let fixture: ComponentFixture<ChapitreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChapitreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChapitreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
