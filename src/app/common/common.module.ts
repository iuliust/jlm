import { NgModule } from '@angular/core';

import { FontSizeComponent } from './font-size/font-size.component';
import { ScrollTopDirective } from './scroll-top/scroll-top.directive';

@NgModule({
  imports: [],
  declarations: [
    FontSizeComponent,
    ScrollTopDirective
  ],
  exports: [
    FontSizeComponent,
    ScrollTopDirective
  ]
})
export class CommonModule { }
