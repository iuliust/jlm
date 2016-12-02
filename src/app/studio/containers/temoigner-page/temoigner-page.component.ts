import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'jlm-temoigner-page',
  templateUrl: './temoigner-page.component.html',
  styleUrls: ['./temoigner-page.component.scss']
})
export class TemoignerPageComponent implements OnInit {
  public monMedia: MediaDeviceInfo = null;
  stream: MediaStream;
  hasAccepted: boolean = false;
  videos: Blob[] = [];
  laVideo: Blob;
  safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    // this.acceptCapture();
  }

  async launch() {
    this.hasAccepted = true;
    try {
      let constraints: MediaStreamConstraints = {
        audio: true,
        video: true
      };

      this.stream = await navigator.mediaDevices.getUserMedia(constraints);
    } catch (e) {
      console.error(e);
    }
  }

  addRecord(enregistrement: Blob) {
    this.videos.push(enregistrement);
    this.laVideo = new Blob([this.videos, enregistrement], {type: 'video/webm; codec=vp9'});
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(this.laVideo));
  }

  acceptCapture() {
    this.hasAccepted = true;
    this.launch();
  }

}
