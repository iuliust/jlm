import { Directive, ViewContainerRef, ViewChild, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[jlmMesure]'
})
export class MesureDirective implements AfterViewInit {

  constructor() { }

	ngAfterViewInit() {}

}
