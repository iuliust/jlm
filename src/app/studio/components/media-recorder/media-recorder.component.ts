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
  private _stream: MediaStream;

  @Output() public recordChange: EventEmitter<Blob> = new EventEmitter<Blob>();
  @Input()
  private set stream(stream: MediaStream) {
    if (stream) {
      this._stream = stream;
    }
  }
  private get stream() {
    return this._stream;
  }
  private mediaRecorder: MediaRecorder;
  private recordedChunks: any;
  // private recordUrl: SafeResourceUrl;
  public options: MediaRecorderOptions = {};

  get canStart() {
    return !this.mediaRecorder || this.mediaRecorder.state === 'inactive';
  }

  get canPause() {
    return this.mediaRecorder && this.mediaRecorder.state === 'recording';
  }

  get canResume() {
    return this.mediaRecorder && this.mediaRecorder.state === 'paused';
  }

  get canStop() {
    return this.mediaRecorder && this.mediaRecorder.state !== 'inactive';
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
    if (! this.mediaRecorder) {
      if (! this.stream) {
        throw new Error('Ce composant n\'a pas de stream !');
      }
    }
    this.recordedChunks = [];
    this.mediaRecorder = new MediaRecorder(this.stream, this.options);
    this.mediaRecorder.addEventListener('dataavailable', this.onDataAvailable.bind(this));
    this.mediaRecorder.addEventListener('stop', this.onRecorderStop.bind(this));
    this.mediaRecorder.start(50);
  }

  pause() {
    this.mediaRecorder.pause();
  }

  resume() {
    this.mediaRecorder.resume();
  }

  stop() {
    this.mediaRecorder.stop();
  }

  private onRecorderStop() {
    this.recordChange.emit(new Blob(this.recordedChunks, {type: this.options.mimeType}));
  }

  private onDataAvailable(event: any) {
    if (event.data.size > 0) {
      this.recordedChunks.push(event.data);
    }
  }

}
