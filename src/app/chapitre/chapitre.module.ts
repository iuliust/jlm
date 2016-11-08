import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { SharedModule, ChapitreService } from '../shared';

import { ChapitreComponent } from './chapitre.component';
import { ChapitrePageComponent } from './chapitre-page/chapitre-page.component';
import { ChapitreNavigationComponent } from './chapitre-navigation/chapitre-navigation.component';
import { MesureComponent } from './mesure/mesure.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    SharedModule
  ],
  declarations: [
    ChapitreComponent,
    ChapitrePageComponent,
    ChapitreNavigationComponent,
    MesureComponent
  ],
  exports: [ ChapitreComponent, ChapitrePageComponent, ChapitreNavigationComponent ],
  providers: [ ChapitreService ]
})
export class ChapitreModule { }
