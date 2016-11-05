import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChapitrePageComponent, ChapitreComponent } from './chapitre';
import { HomeComponent } from './home/home.component';
import { EncartFiltresComponent } from './encart-filtres/encart-filtres.component';

export const routes: Routes = [
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
	];

@NgModule({
	imports: [
		RouterModule.forRoot(routes)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
