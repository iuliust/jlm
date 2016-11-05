import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from '@angular/material';
// import { MdCoreModule } from '@angular/material/core';
// import { MdSidenavModule } from '@angular/material/sidenav';
// import { MdToolbarModule } from '@angular/material/toolbar';
// import { MdIconModule } from '@angular/material/icon';
// import { MdButtonModule } from '@angular/material/button';

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
		// modules de @angular
		BrowserModule,
		FormsModule,
		HttpModule,

		// modules maison
		AppRoutingModule,
		TemplateDirectivesModule,
		ChapitreModule,
		CommonModule,

		// modules Material Design
		MaterialModule.forRoot(),
		// MdCoreModule.forRoot(),
		// MdSidenavModule.forRoot(),
		// MdToolbarModule.forRoot(),
		// MdIconModule.forRoot(),
		// MdButtonModule.forRoot()
	],
	providers: [ WindowRef, PreferencesService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
