import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { StoreModule } from '@ngrx/store';
// je laisse ces commentaires pour garder une trace des modules material utilisés dans cette application
// import { MdCoreModule } from '@angular/material/core';
// import { MdSidenavModule } from '@angular/material/sidenav';
// import { MdToolbarModule } from '@angular/material/toolbar';
// import { MdIconModule } from '@angular/material/icon';
// import { MdButtonModule } from '@angular/material/button';

// importation des modules maison
import { AppRoutingModule } from './app-routing.module';
import { ChapitreModule } from './chapitre';
import { SharedModule } from './shared';

// importation des services maison
import { preferencesReducer, IntersectionObserverService } from './shared';
import { WindowRef } from './shared';

// importation des composants maison
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EncartFiltresComponent } from './encart-filtres/encart-filtres.component';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


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
		StoreModule.provideStore({ preferences: preferencesReducer }),

		// modules maison
		SharedModule,
		AppRoutingModule,
		ChapitreModule,

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
