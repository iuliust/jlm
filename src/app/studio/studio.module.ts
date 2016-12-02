import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MdCoreModule, MdIconModule } from '@angular/material';

import { StudioRoutingModule } from './studio-routing.module';

import { StudioComponent } from './studio.component';
import { MediaSelectorComponent } from './components/media-selector/media-selector.component';
import { MediaRecorderComponent } from './components/media-recorder/media-recorder.component';
import { VideoListComponent } from './components/video-list/video-list.component';

import { StudioHomeComponent } from './containers/studio-home/studio-home.component';
import { TemoignerPageComponent } from './containers/temoigner-page/temoigner-page.component';
import { InputStreamDirective } from './shared/input-stream/input-stream.directive';
import { VideoLayoutComponent } from './components/video-layout/video-layout.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StudioRoutingModule,
    MdCoreModule,
    MdIconModule
  ],
  declarations: [
    StudioComponent,
    MediaSelectorComponent,
    MediaRecorderComponent,
    VideoListComponent,

    StudioHomeComponent,
    TemoignerPageComponent,
    InputStreamDirective,
    VideoLayoutComponent
  ]
})
export class StudioModule { }
