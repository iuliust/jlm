import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudioHomeComponent } from './containers/studio-home/studio-home.component';
import { TemoignerPageComponent } from './containers/temoigner-page/temoigner-page.component';

export const routes: Routes = [
  { path: '', component: StudioHomeComponent },
  { path: 'temoigner', component: TemoignerPageComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(routes)
	],
	exports: [
		RouterModule
	]
})
export class StudioRoutingModule {}
