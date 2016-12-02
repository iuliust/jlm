import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChapitrePageComponent, ChapitreComponent } from './chapitre';
import { HomeComponent } from './containers/home/home.component';
import { EncartFiltresComponent } from './containers/encart-filtres/encart-filtres.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

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
		},
		{ path: 'studio', loadChildren: 'app/studio/studio.module#StudioModule' },
		{ path: 'erreur404', component: PageNotFoundComponent },
		{ path: '**', redirectTo: '/erreur404' }
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
