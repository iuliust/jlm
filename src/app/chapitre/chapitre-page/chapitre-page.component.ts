import {
	Component,
	OnInit
} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { PreferencesService } from '../../shared';
import { ChapitreService } from '../../shared';

@Component({
  selector: 'jlm-chapitre-page',
  templateUrl: './chapitre-page.component.html',
  styleUrls: ['./chapitre-page.component.scss']
})
export class ChapitrePageComponent implements OnInit {
  chapitre: any;

  constructor(
		private route: ActivatedRoute,
		private preferences: PreferencesService,
		private chapitreService: ChapitreService
	) { }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			const chapitreId = +params['chapitreId'];
			this.chapitreService.getChapitre(chapitreId)
				.then(chapitre => this.chapitre = chapitre);
		});
	}
}
