import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StudioComponent } from './studio.component';
import { MediaSelectorComponent } from './components/media-selector/media-selector.component';

export const routes: Routes = [
  { path: '', component: StudioComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudioComponent, MediaSelectorComponent]
})
export class StudioModule { }
