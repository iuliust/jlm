import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontSizeComponent } from './font-size/font-size.component';
import { ScrollTopDirective } from './scroll-top/scroll-top.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    FontSizeComponent,
    ScrollTopDirective
  ],
  exports: [
    FontSizeComponent,
    ScrollTopDirective
  ],
  providers: [  ]
})
export class SharedModule { }
