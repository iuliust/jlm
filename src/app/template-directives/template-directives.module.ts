import { NgModule } from '@angular/core';
import { IntersectionObserverService } from './intersection-observer.service';
import { AnimationTestComponent } from './animation-test.component';

@NgModule({
  imports: [],
  declarations: [AnimationTestComponent],
	exports: [AnimationTestComponent],
	providers: [IntersectionObserverService]
})
export class TemplateDirectivesModule { }
