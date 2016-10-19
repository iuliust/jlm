import {
	Component,
	OnInit,
	ViewEncapsulation
} from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'jlm-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.scss']
})
export class ChapitreComponent implements OnInit {
	chapitre: any;

  constructor(
		private route : ActivatedRoute,
		private http: Http
	) { }

	ngOnInit() {
		this.route.params.forEach((params: Params) => {
			const chapitreId = +params['chapitreId'];
			this.http.get(`/assets/programme/chapitre0${chapitreId}.json`)
			.toPromise()
			.then((res: Response) => {
				this.chapitre = JSON.parse(res.text().replace(/[\n\t]+/g, ' '));
			})
		});
	}
}
