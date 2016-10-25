import { Injectable } from '@angular/core';

@Injectable()
export class PreferencesService {
	fontSize: number = 1;

	constructor() {
	}

	getPreferences(): Promise<any> {
		return Promise.resolve({
			fontSize: 1.1
		});
	}

	/**
     * Incrémente la taille de la police de 0.1
	 * @param amount Quantité à ajouter à la valeur actuelle
     */
	incrementFontSize(amount?: number) {
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
