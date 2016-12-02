import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';

// importation des modules maison
import { AppRoutingModule } from './app-routing.module';
import { ChapitreModule } from './chapitre';
import { SharedModule } from './shared';

// importation des services maison
import { IntersectionObserverService } from './shared';
import { reducer } from './shared/reducers';
import { WindowRef } from './shared';

// importation des composants maison
import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { EncartFiltresComponent } from './containers/encart-filtres/encart-filtres.component';
import { AppNavigationComponent } from './containers/app-navigation/app-navigation.component';
import { AppLayoutComponent } from './containers/app-layout/app-layout.component';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		EncartFiltresComponent,
		AppNavigationComponent,
		AppLayoutComponent,
		PageNotFoundComponent
	],
	imports: [
		// modules de @angular
		BrowserModule,
		FormsModule,
		HttpModule,

		StoreModule.provideStore(reducer),

		// modules maison
		SharedModule,
		AppRoutingModule,
		ChapitreModule,
		// StudioModule,

		// modules Material Design
		MaterialModule.forRoot(),
		// MdCoreModule.forRoot(),
		// MdSidenavModule.forRoot(),
		// MdToolbarModule.forRoot(),
		// MdIconModule.forRoot(),
		// MdButtonModule.forRoot()
	],
	providers: [ WindowRef, IntersectionObserverService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
