import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChapitrePageComponent, ChapitreComponent } from './chapitre';
import { HomeComponent } from './home/home.component';
import { EncartFiltresComponent } from './encart-filtres/encart-filtres.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{
				path: 'chapitres',
				children: [
					{ path: '', component: ChapitreComponent },
					{
						path: ':chapitreId',
						children: [
							{ path: '', component: EncartFiltresComponent, outlet: 'encart' },
							{ path: '', component: ChapitrePageComponent }
						]
					}
				]
			}
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
