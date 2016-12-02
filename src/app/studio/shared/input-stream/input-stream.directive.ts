import { Directive, OnInit, Input, HostBinding, HostListener, ViewContainerRef } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Directive({
  selector: 'video[jlmInputStream], audio[jlmInputStream]'
})
export class InputStreamDirective implements OnInit {

  @HostBinding('src')
  private safeUrl: SafeResourceUrl | string;

  private _stream: MediaStream = null;

  @Input('jlmInputStream')
  set stream(stream: MediaStream) {
    if (! (stream instanceof MediaStream)) {
      throw new Error('stream doit être de type MediaStream');
    }
    this._stream = stream;
    if (stream) {
      let dangerousUrl = window.URL.createObjectURL(stream);
      this.safeUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
    }
  }

  constructor(
    private domSanitizer: DomSanitizer,
    private ref: ViewContainerRef) { }

  ngOnInit() { }

  @HostListener('loadedmetadata')
  play() {
    this.ref.element.nativeElement.play();
  }

}
