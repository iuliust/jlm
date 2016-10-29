import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ChapitreComponent } from './chapitre.component';
import { ChapitrePageComponent } from './chapitre-page/chapitre-page.component';
import { ChapitreNavigationComponent } from './chapitre-navigation/chapitre-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([])
  ],
  declarations: [ ChapitreComponent, ChapitrePageComponent, ChapitreNavigationComponent],
  exports: [ ChapitreComponent, ChapitrePageComponent, ChapitreNavigationComponent ]
})
export class ChapitreModule { }
