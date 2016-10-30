import { NgModule } from '@angular/core';
import { CommonModule  as NgCommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CommonModule as JlmCommonModule } from '../common';

import { ChapitreComponent } from './chapitre.component';
import { ChapitrePageComponent } from './chapitre-page/chapitre-page.component';
import { ChapitreNavigationComponent } from './chapitre-navigation/chapitre-navigation.component';

@NgModule({
  imports: [
    NgCommonModule,
    RouterModule,
    JlmCommonModule
  ],
  declarations: [ ChapitreComponent, ChapitrePageComponent, ChapitreNavigationComponent],
  exports: [ ChapitreComponent, ChapitrePageComponent, ChapitreNavigationComponent ]
})
export class ChapitreModule { }
