import { Component,	OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { ChapitreService, AppState } from '../../shared';
import { Preferences } from '../../shared/models/preferences';

@Component({
  selector: 'jlm-chapitre-page',
  templateUrl: './chapitre-page.component.html',
  styleUrls: ['./chapitre-page.component.scss']
})
export class ChapitrePageComponent implements OnInit {
  private chapitre: any;
  private preferences: Observable<Preferences>;
	private loading: boolean = true;

  constructor(
		private route: ActivatedRoute,
		private chapitreService: ChapitreService,
		private store: Store<AppState>
	) { }

	ngOnInit() {
		this.preferences = this.store.select<Preferences>('preferences');
		this.route.params.forEach((params: Params) => {
			const chapitreId = +params['chapitreId'];
			this.loading = true;
			this.chapitreService.getChapitre(chapitreId)
				.then(chapitre => {
					this.loading = false;
					this.chapitre = chapitre;
				});
		});
	}
}
