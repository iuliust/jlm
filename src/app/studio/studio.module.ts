import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StudioComponent } from './studio.component';
import { MediaSelectorComponent } from './components/media-selector/media-selector.component';
import { MediaRecorderComponent } from './components/media-recorder/media-recorder.component';
import { MediaStreamReaderComponent } from './components/media-stream-reader/media-stream-reader.component';

export const routes: Routes = [
  { path: '', component: StudioComponent }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StudioComponent,
    MediaSelectorComponent,
    MediaRecorderComponent,
    MediaStreamReaderComponent
  ]
})
export class StudioModule { }
