import { NgModule } from '@angular/core';
import { CommonModule as NgCommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { FontSizeComponent } from './font-size/font-size.component';
import { ScrollTopDirective } from './scroll-top/scroll-top.directive';

@NgModule({
  imports: [
    NgCommonModule,
    MaterialModule
  ],
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
