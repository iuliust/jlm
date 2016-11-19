import { Component, OnInit, OnChanges, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'jlm-media-stream-reader',
  templateUrl: './media-stream-reader.component.html',
  styleUrls: ['./media-stream-reader.component.scss']
})
export class MediaStreamReaderComponent implements OnInit, OnChanges {
  @Input() stream: MediaStream;
  @Input() muted: boolean = false;
  private safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if ('stream' in changes && changes['stream'].currentValue !== undefined) {
      let change: SimpleChange = changes['stream'];
      let stream: MediaStream = change.currentValue;
      let dangerousUrl = window.URL.createObjectURL(stream);
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
    }
  }

}
