import {
	Component,
	// OnInit,
	// OnDestroy,
	AfterViewInit,
	// ViewChild,
	HostBinding,
	ElementRef,
	// EmbeddedViewRef,
	trigger,
	state,
	style,
	transition,
	animate,
	NgZone,
	// ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'jlm-animation-test',
	template: `<ng-content></ng-content>`,
	styles: [`:host {display: block; will-change: opacity}`],
	animations: [
		trigger('heroState', [
			state('inactive', style({
				opacity: '0'
			})),
			state('active', style({
				opacity: '1'
			})),
			transition('inactive => active', animate('500ms ease-in')),
			transition('active => inactive', animate('500ms ease-out'))
		])
	],
	// encapsulation: ViewEncapsulation.Native
})
export class AnimationTestComponent implements AfterViewInit {
	@HostBinding('@heroState')
	private state: string = 'inactive';
	private io: any;
	private dejaVu: boolean = false;

  constructor(private zone: NgZone, private ref: ElementRef) {  }

	ngAfterViewInit() {
		const IntersectionObserver: any = window['IntersectionObserver'];
		this.io = new IntersectionObserver(entries => {
				this.zone.run(
					() => this.intersectionObserverCallback(entries)
				);
			}, {
			threshold: [0, .5, 1]
		});
		this.io.observe(this.ref.nativeElement);
	}

	// ngOnDestroy() {
	// 	this.io.unobserve(this.ref.nativeElement);
	// 	this.io.disconnect();
	// }

	intersectionObserverCallback(entries) {
		if (entries[0].target === this.ref.nativeElement) {
			if (entries[0].intersectionRatio > 0) {
				this.state = 'active';
				this.dejaVu = true;
			} else if (!this.dejaVu) {
				this.state = 'inactive';
			}
		}
	}

	toggleState() {
		this.state = (this.state === 'active') ? 'inactive' : 'active';
	}
}
