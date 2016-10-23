import { Injectable } from '@angular/core';

@Injectable()
export class PreferencesService {
	fontSize: number;

	constructor() {
		this.fontSize = 1;
	}

	incrementFontSize() {
		this.fontSize += 0.1;
	}

	decrementFontSize() {
		this.fontSize -= 0.1;
	}

	savePreferences() {}

}
