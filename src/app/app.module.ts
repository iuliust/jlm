import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { TemplateDirectivesModule } from './template-directives/template-directives.module';

import { AppComponent } from './app.component';
import { ChapitreComponent } from './chapitre/chapitre.component';
import { HomeComponent } from './home/home.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { EncartFiltresComponent } from './encart-filtres/encart-filtres.component';
import { ScrollTopDirective } from './scroll-top/scroll-top.directive';
import { FontSizeComponent } from './font-size/font-size.component';

import { WindowRef } from './shared';
import { PreferencesService } from './shared/preferences.service';

@NgModule({
	declarations: [
		AppComponent,
		ChapitreComponent,
		HomeComponent,
		TopNavComponent,
		EncartFiltresComponent,
		ScrollTopDirective,
		FontSizeComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		AppRoutingModule,
		TemplateDirectivesModule
	],
	providers: [WindowRef, PreferencesService],
	bootstrap: [AppComponent]
})
export class AppModule { }
