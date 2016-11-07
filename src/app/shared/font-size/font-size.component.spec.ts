/* tslint:disable:no-unused-variable */

import { DebugElement } from '@angular/core';
import { MaterialRootModule } from '@angular/material';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { FontSizeComponent } from './font-size.component';
import { click } from '../../../../testing';

describe('FontSizeComponent', () => {
    let fixture: ComponentFixture<FontSizeComponent>;
    let comp: FontSizeComponent;
    let de: DebugElement;
    let el: HTMLElement;
    let buttonsDebug: DebugElement[];
    let buttons: HTMLButtonElement[];

    let injectedPreferencesService;
    // let spy: jasmine.Spy;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ FontSizeComponent ],
            imports: [
                MaterialRootModule
            ],
            providers: [ ]
        });

        fixture = TestBed.createComponent(FontSizeComponent);
        comp = fixture.componentInstance;

        de = fixture.debugElement.query(By.css('.increment'));
        el = de.nativeElement;

        // injectedPreferencesService = fixture.debugElement.injector.get(PreferencesService);

        // spy = spyOn(injectedPreferencesService, 'getPreferences')
        //     .and.returnValue(Promise.resolve('Dans l\'univers, deux choses sont infinies.'));

        buttonsDebug = fixture.debugElement.queryAll(By.css('button'));
        buttons = buttonsDebug.map(e => e.nativeElement);
    });

    // it('font-size should equal 1 initially', () => {
    //     expect(injectedPreferencesService.fontSize).toEqual(1);
    // });

    // it('should display three buttons to change the font size', () => {
    //     expect(buttons.length).toEqual(2);
    //     const buttonsContent: string[] = buttons.map(b => b.textContent);
    //     expect(buttonsContent).toEqual(['A+', 'A-']);
    // });

    // it('clicking the first button should increment the font size', () => {
    //     expect(injectedPreferencesService.fontSize).toEqual(1);
    //     click(buttons[0]);
    //     expect(injectedPreferencesService.fontSize).toEqual(1 + 0.1);
    // });

    // it('clicking the second button should decrement the font size', () => {
    //     expect(injectedPreferencesService.fontSize).toEqual(1);
    //     click(buttons[1]);
    //     expect(injectedPreferencesService.fontSize).toEqual(1 - .1);
    // });

});
