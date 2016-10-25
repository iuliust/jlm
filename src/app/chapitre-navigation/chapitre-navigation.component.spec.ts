/* tslint:disable:no-unused-variable */

import { MaterialRootModule } from '@angular/material';
import { TestBed, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppRoutingModule } from '../app-routing.module';
import { ChapitreNavigationComponent } from './chapitre-navigation.component';


describe('ChapitreNavigationComponent', () => {
    let fixture: ComponentFixture<ChapitreNavigationComponent>;
    let comp: ChapitreNavigationComponent;
    let de: DebugElement;
    let el: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ChapitreNavigationComponent ],
            imports: [ MaterialRootModule ]
        });

        fixture = TestBed.createComponent(ChapitreNavigationComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('h2'));
        el = de.nativeElement;
    });

    it('no title in the DOM until manually call `detectChanges`', () => {
        expect(el.textContent).toEqual('');
    });
    it('should display the title of the component', () => {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.titre);
    });
    it('should display a different test title', () => {
        comp.titre = 'Coucou les zouzous';
        fixture.detectChanges();
        expect(el.textContent).toContain('zouzous');
    });
});
