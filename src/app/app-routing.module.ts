import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChapitreComponent } from './chapitre/chapitre.component';
import { HomeComponent } from './home/home.component';

@NgModule({
	imports: [
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{ path: 'chapitre/:chapitreId', component: ChapitreComponent }
		])
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}
