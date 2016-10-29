import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChapitrePageComponent } from './chapitre/chapitre-page/chapitre-page.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{ path: 'chapitres', component: HomeComponent },
			{ path: 'chapitres/:chapitreId', component: ChapitrePageComponent }
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
