import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewEncapsulation, Renderer } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'jlm-chapitre',
  // templateUrl: '../../assets/programme/chapitre01.html',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class ChapitreComponent implements OnInit, AfterViewInit {
	@ViewChild('include') includeDiv: ElementRef;
	template: String = `<div>Veuillez patienter pendant le chargement du chapitre...</div>`;

  constructor(
		private route : ActivatedRoute,
		private http: Http,
		private renderer: Renderer
	) { }

  ngOnInit() {
		// console.dir(this.includeDiv);
  }

	ngAfterViewInit() {
		this.route.params.forEach((params: Params) => {
			let id = +params['chapitreId'];
			this.http.get(`/assets/programme/chapitre0${id}.html`)
			.toPromise()
			.then((res: Response) => {
				this.includeDiv.nativeElement.innerHTML = res.text();
				
			});
		});
	}
}
