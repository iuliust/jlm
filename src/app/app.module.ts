import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { TemplateDirectivesModule } from './template-directives/template-directives.module';
import { ChapitreModule } from './chapitre';
import { CommonModule } from './common';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncartFiltresComponent } from './encart-filtres/encart-filtres.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';


import { WindowRef } from './shared';
import { PreferencesService } from './shared/preferences.service';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		EncartFiltresComponent,
		AppNavigationComponent,
		AppLayoutComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		MaterialModule.forRoot(),
		AppRoutingModule,
		TemplateDirectivesModule,
		ChapitreModule,
		CommonModule
	],
	providers: [ WindowRef, PreferencesService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
