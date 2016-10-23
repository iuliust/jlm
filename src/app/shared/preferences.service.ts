import { Injectable } from '@angular/core';

@Injectable()
export class PreferencesService {
	fontSize: number = 1;

	constructor() {
	}

	incrementFontSize() {
		this.fontSize += 0.1;
	}

	decrementFontSize() {
		this.fontSize -= 0.1;
	}

	resetFontSize() {
		this.fontSize = 1;
	}

	savePreferences() {}

}
