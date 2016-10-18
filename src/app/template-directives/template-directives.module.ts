import { NgModule } from '@angular/core';
import { IntersectionObserverService } from './intersection-observer.service';
import { AnimationTestComponent } from './animation-test.component';
import { MesureDirective } from './mesure/mesure.directive';

@NgModule({
  imports: [],
  declarations: [AnimationTestComponent, MesureDirective],
	exports: [AnimationTestComponent, MesureDirective],
	providers: [IntersectionObserverService]
})
export class TemplateDirectivesModule { }
