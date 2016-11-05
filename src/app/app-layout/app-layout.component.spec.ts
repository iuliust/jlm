/* tslint:disable:no-unused-variable */
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MaterialRootModule } from '@angular/material';
import { Component, DebugElement } from '@angular/core';

import { AppLayoutComponent } from './app-layout.component';

@Component({
    selector: 'jlm-app-navigation',
    template: ''
})
class AppNavigationStubComponent {}

describe('AppLayoutComponent', () => {
  let component: AppLayoutComponent;
  let fixture: ComponentFixture<AppLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialRootModule, RouterTestingModule ],
      declarations: [ AppLayoutComponent, AppNavigationStubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
