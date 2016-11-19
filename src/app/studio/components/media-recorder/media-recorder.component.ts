import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'jlm-media-recorder',
  templateUrl: './media-recorder.component.html',
  styleUrls: ['./media-recorder.component.scss']
})
export class MediaRecorderComponent implements OnInit {
  @ViewChild('videoCanvas') videoEl: ElementRef;
  _stream: MediaStream;
  @Input()
  set stream(stream: MediaStream) {
    if (stream) {
      this._stream = stream;
      this.createMediaRecorder(stream);
    }
  }
  get stream() {
    return this._stream;
  }
  private mediaRecorder: any;
  recordedChunks: any;
  record: Blob;
  private recordUrl: SafeResourceUrl;
  public options: any = {};

  get canStart() {
    return this.mediaRecorder && this.mediaRecorder.state === 'inactive';
  }

  get canPause() {
    return this.mediaRecorder.state === 'recording';
  }

  get canResume() {
    return this.mediaRecorder.state === 'paused';
  }

  get canStop() {
    return this.mediaRecorder.state !== 'inactive';
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.recordedChunks = [];
    if (MediaRecorder.isTypeSupported('video/webm;codecs=vp9')) {
      this.options.mimeType = 'video/webm; codecs=vp9';
    } else if (MediaRecorder.isTypeSupported('video/webm;codecs=vp8')) {
        this.options.mimeType = 'video/webm; codecs=vp8';
    }
  }

  start() {
    this.mediaRecorder.start(50);
    console.log(this.mediaRecorder);
  }

  pause() {
    this.mediaRecorder.pause();
  }

  resume() {
    this.mediaRecorder.resume();
  }

  stop() {
    this.mediaRecorder.stop();
    this.record = new Blob(this.recordedChunks, {type: this.options.mimeType});
    this.recordedChunks = [];
    console.log(this.record);
    let dangerousUrl = window.URL.createObjectURL(this.record);
    this.recordUrl = this.sanitizer.bypassSecurityTrustResourceUrl(dangerousUrl);
  }

  createMediaRecorder(stream: MediaStream) {
    this.mediaRecorder = new MediaRecorder(stream, this.options);
    this.mediaRecorder.addEventListener('dataavailable', this.onDataAvailable.bind(this));
  }

  private onDataAvailable(event: any) {
    console.log('callback');
    if (event.data.size > 0) {
      this.recordedChunks.push(event.data);
    }
  }

}
