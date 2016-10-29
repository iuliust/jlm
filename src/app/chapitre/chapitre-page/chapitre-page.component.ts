import {
	Component,
	OnInit
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { PreferencesService } from '../../shared';

@Component({
  selector: 'jlm-chapitre-page',
  templateUrl: './chapitre-page.component.html',
  styleUrls: ['./chapitre-page.component.scss']
})
export class ChapitrePageComponent implements OnInit {
  chapitre: any;

  constructor(
		private route: ActivatedRoute,
		private http: Http,
		private preferences: PreferencesService
	) { }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			const chapitreId = +params['chapitreId'];
			this.http.get(`/assets/programme/chapitre0${chapitreId}.json`)
			.toPromise()
			.then((res: Response) => {
				const pure = (res.text().replace(/[\n\t]+/g, ' '));
				const json = JSON.parse(pure);
				this.chapitre = json;
			});
		});
	}
}
