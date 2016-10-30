import { Directive, HostListener } from '@angular/core';

import { WindowRef } from '../../shared';

@Directive({
  selector: '[jlmScrollTop]'
})
export class ScrollTopDirective {

  constructor(private window: WindowRef) { }

	@HostListener('click')
	scrollToTop() {
		this.window.nativeWindow.scrollTo({top: 0});
	}

}
