import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { TemplateDirectivesModule } from './template-directives/template-directives.module';

import { AppComponent } from './app.component';
import { ChapitreComponent } from './chapitre/chapitre.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';

@NgModule({
	declarations: [
		AppComponent,
		ChapitreComponent,
		HomeComponent,
		TopNavComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule.forRoot([
			{ path: '', component: HomeComponent },
			{ path: 'chapitre/:chapitreId', component: ChapitreComponent }
		]),
		TemplateDirectivesModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
