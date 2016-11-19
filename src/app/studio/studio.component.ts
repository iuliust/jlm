import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jlm-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.scss']
})
export class StudioComponent implements OnInit {
  public monMedia: MediaDeviceInfo = null;
  stream: MediaStream;

  constructor() { }

  ngOnInit() {
  }

  logMonMedia() {
    console.dir(this.monMedia);
  }

  launch() {
    let constraints: MediaStreamConstraints = {
      audio: true,
      video: true
    };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream: MediaStream) => {
        this.stream = stream;
      });
  }

}
