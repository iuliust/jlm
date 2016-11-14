import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { RouterModule, Routes } from '@angular/router';

import { StudioComponent } from './studio.component';

// export const routes: Routes = [
//   { path: '', component: StudioComponent }
// ];

@NgModule({
  imports: [
    CommonModule,
    // RouterModule.forChild(routes)
  ],
  declarations: [StudioComponent]
})
export class StudioModule { }
