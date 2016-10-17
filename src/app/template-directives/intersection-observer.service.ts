import { Injectable, ViewRef, ViewContainerRef } from '@angular/core';

export interface IntersectionObserverInterface {
	observe(ViewRef);
	unobserve(any);
	disconnect();
}

@Injectable()
export class IntersectionObserverService {
	public io: IntersectionObserverInterface;

	constructor() {
		this.io = window['IntersectionObserver'];
	}

	// observe(view: ViewRef) {
	// 	this.io.observe(view);
	// }
	// unobserve(view: ViewRef) {
	// 	this.io.observe(view);
	// }
	// disconnect() {
	// 	this.io.disconnect();
	// }

}
