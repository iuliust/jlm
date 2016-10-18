import {
	Directive,
	ElementRef, // référence sur l'élement Host
	ViewChild, // ne fonctionne que pour les Component
	ViewContainerRef, // référence
	ViewChildren,
	ContentChild,
	ContentChildren,
	// events
	EventEmitter,
	Output,
	HostListener,
	// lifecycle hooks
	OnInit,
	AfterContentChecked,
	AfterContentInit
} from '@angular/core';

@Directive({
  selector: '[jlmMesure]'
})
export class MesureDirective implements OnInit, AfterContentInit {
	@ContentChild(MesureDirective)
	private test: MesureDirective;

  constructor(
		private elementRef: ElementRef
	) { }

	ngOnInit() { }

	ngAfterContentInit() { }

}
