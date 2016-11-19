/* tslint:disable:no-unused-variable */

import { MaterialModule } from '@angular/material';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';
import { ChapitreNavigationComponent } from './chapitre-navigation.component';

@Component({template: ``})
class DummyComponent {}

describe('ChapitreNavigationComponent', () => {
    let fixture: ComponentFixture<ChapitreNavigationComponent>;
    let componentInstance: ChapitreNavigationComponent;
    let phiSpanDe: DebugElement;
    let phiSpanEl: HTMLElement;
    let anchorDe: DebugElement[];
    let anchorEls: HTMLElement[];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ChapitreNavigationComponent, DummyComponent ],
            imports: [
                MaterialRootModule.forRoot(),
                RouterTestingModule.withRoutes([
                    { path: '', component: DummyComponent },
                    { path: 'chapitre/:chapitreId', component: DummyComponent }
                ])
            ]
        });

        fixture = TestBed.createComponent(ChapitreNavigationComponent);
        componentInstance = fixture.componentInstance;

        phiSpanDe = fixture.debugElement.query(By.css('.phi .numero'));
        phiSpanEl = phiSpanDe.nativeElement;

        anchorDe = fixture.debugElement.queryAll(By.css('.chapitre-link a'));
        anchorEls = anchorDe.map(a => a.nativeElement);
    });

    it('should display a link to root route and phi greek letter', () => {
        expect(phiSpanEl.textContent).toContain('φ');
    });

    it('should display seven links, from 1 to 7', () => {
        expect(anchorEls.length).toBe(7, 'displays links to all seven chapters');
        expect(anchorEls.map(a => a.textContent))
            .toEqual(['1', '2', '3', '4', '5', '6', '7'], 'the links\' text content are numbers going from 1 to 7');
    });
});
