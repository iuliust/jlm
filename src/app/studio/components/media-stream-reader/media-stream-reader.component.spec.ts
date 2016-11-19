/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MediaStreamReaderComponent } from './media-stream-reader.component';

describe('MediaStreamReaderComponent', () => {
  let component: MediaStreamReaderComponent;
  let fixture: ComponentFixture<MediaStreamReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaStreamReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaStreamReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
