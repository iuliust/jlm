import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimationTestComponent } from './animation-test.component';
import { FontSizeComponent } from './font-size/font-size.component';
import { ScrollTopDirective } from './scroll-top/scroll-top.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnimationTestComponent,
    FontSizeComponent,
    ScrollTopDirective
  ],
  exports: [
    AnimationTestComponent,
    FontSizeComponent,
    ScrollTopDirective
  ],
  providers: [  ]
})
export class SharedModule { }
