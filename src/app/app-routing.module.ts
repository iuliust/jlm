import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChapitrePageComponent, ChapitreComponent } from './chapitre';
import { HomeComponent } from './home/home.component';
import { EncartFiltresComponent } from './encart-filtres/encart-filtres.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
// import { StudioComponent } from './studio/studio.component';

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
		// { path: 'studio', component: StudioComponent },
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
