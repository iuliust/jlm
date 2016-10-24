import { Component, ViewChild } from '@angular/core';
import { MdSidenav } from '@angular/material/sidenav';

import { Title } from '@angular/platform-browser';


@Component({
	selector: 'jlm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	@ViewChild('nav')
	sidenavElement: MdSidenav;

	title: string = `L'avenir en commun`;
	navIsOpen: boolean = false;

	constructor(private titleService: Title) {
		this.setTitle(`L'avenir en commun`);
	}

	public setTitle(title: string) {
		this.titleService.setTitle(title);
	}

	public toggleSidenav(value?: boolean) {
		if (value !== undefined) {
			this.navIsOpen = value;
		} else {
			this.navIsOpen = !this.navIsOpen;
		}
		if (this.navIsOpen) {
			this.sidenavElement.open();
		} else {
			this.sidenavElement.close();
		}
	}

}
