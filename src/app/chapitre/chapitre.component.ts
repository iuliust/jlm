import { NgModule, Component, OnInit, AfterViewInit, ViewChild, ViewContainerRef, Compiler, ComponentFactory, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'jlm-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.scss']
})
export class ChapitreComponent implements OnInit, AfterViewInit {
	@ViewChild('include', { read: ViewContainerRef }) includeDiv: ViewContainerRef;

  constructor(
		private route : ActivatedRoute,
		private http: Http,
    private viewContainer: ViewContainerRef,
		private compiler: Compiler
	) { }

	ngAfterViewInit() {
		this.route.params.forEach((params: Params) => {
			const chapitreId = +params['chapitreId'];
			this.http.get(`/assets/programme/chapitre0${chapitreId}.html`)
			.toPromise()
			.then((res: Response) => {
				this.injectTemplate(res.text());
			});
		});
	}

	injectTemplate(template: string) {
		this.includeDiv.clear();

		@Component({
			template: template,
			styleUrls: ['./chapitre.component.scss']
		})
		class TemplateComponent {}

		@NgModule({declarations: [TemplateComponent]})
		class TemplateModule {}

		const module = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
		const factory = module.componentFactories.find((comp: ComponentFactory<any>) => {
			return comp.componentType === TemplateComponent
		});
		const component = this.includeDiv.createComponent(factory);
}

	ngOnInit() {}
}
