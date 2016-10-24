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
import { ChapitreNavigationComponent } from './chapitre-navigation/chapitre-navigation.component';
import { EncartFiltresComponent } from './encart-filtres/encart-filtres.component';
import { ScrollTopDirective } from './scroll-top/scroll-top.directive';
import { FontSizeComponent } from './font-size/font-size.component';

import { WindowRef } from './shared';
import { PreferencesService } from './shared/preferences.service';
import { AppNavigationComponent } from './app-navigation/app-navigation.component';

@NgModule({
	declarations: [
		AppComponent,
		ChapitreComponent,
		HomeComponent,
		ChapitreNavigationComponent,
		EncartFiltresComponent,
		ScrollTopDirective,
		FontSizeComponent,
		AppNavigationComponent
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
