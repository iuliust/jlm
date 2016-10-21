import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
	selector: 'jlm-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = `L'avenir en commun`;

	constructor(private titleService: Title) {
		this.setTitle(`L'avenir en commun`);
	}

	public setTitle(title: string) {
		this.titleService.setTitle(title);
	}

}
