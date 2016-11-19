/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaRecorderComponent } from './media-recorder.component';

describe('MediaRecorderComponent', () => {
  let component: MediaRecorderComponent;
  let fixture: ComponentFixture<MediaRecorderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaRecorderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
