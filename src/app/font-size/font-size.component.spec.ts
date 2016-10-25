/* tslint:disable:no-unused-variable */

import { DebugElement } from '@angular/core';
import { MaterialRootModule } from '@angular/material';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FontSizeComponent } from './font-size.component';
import { PreferencesService } from '../shared';


describe('FontSizeComponent', () => {
    let fixture: ComponentFixture<FontSizeComponent>;
    let comp: FontSizeComponent;
    let de: DebugElement;
    let el: HTMLElement;
    let buttonsDebug: DebugElement[];
    let buttons: HTMLButtonElement[];

    let preferencesServiceStub;
    let injectedPreferencesService;
    let spy: jasmine.Spy;

    beforeEach(() => {
        preferencesServiceStub = {
            fontSize: 1,
            incrementFontSize() {
        		this.fontSize += 0.1;
        	},
        	decrementFontSize() {
        		this.fontSize -= 0.1;
        	},
        	resetFontSize() {
        		this.fontSize = 1;
        	},
        	savePreferences() {}
        };

        TestBed.configureTestingModule({
            declarations: [ FontSizeComponent ],
            imports: [ MaterialRootModule ],
            providers: [ PreferencesService ]
        });

        fixture = TestBed.createComponent(FontSizeComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('.increment'));
        el = de.nativeElement;

        injectedPreferencesService = fixture.debugElement.injector.get(PreferencesService);

        spy = spyOn(PreferencesService, 'getPreferences')
            .and.returnValue(Promise.resolve('Dans l\'univers, deux choses sont infinies.'));

        buttonsDebug = fixture.debugElement.queryAll(By.css('button'));
        buttons = buttonsDebug.map(e => e.nativeElement);

    });

    it('stub object and injected PreferencesService should not be the same', () => {
        expect(injectedPreferencesService === preferencesServiceStub).toBe(false);
        preferencesServiceStub.fontSize = 2;
        expect(injectedPreferencesService.fontSize).toEqual(1);
    });

    it('should display three buttons to change the font size', () => {
        expect(buttons.length).toEqual(3);
        const buttonsContent: string[] = buttons.map(b => b.textContent);
        expect(buttonsContent).toEqual(['A+ ', 'A- ', 'refresh ']);
    });

});
