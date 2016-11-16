import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'jlm-media-selector',
  templateUrl: './media-selector.component.html',
  styleUrls: ['./media-selector.component.scss']
})
export class MediaSelectorComponent implements OnInit {
  @Input() kindFilter: string = 'audioinput';
  @Output() selectedMediaChange: EventEmitter<MediaSource> = new EventEmitter<MediaSource>();
  private devices: MediaDeviceInfo[];

  constructor() { }

  ngOnInit() {
  }

  enumerateDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => this.enumerateDevicesSuccess(devices))
      .catch(error => this.enumerateDeviceError(error));
  }

  enumerateDevicesSuccess(deviceInfos: MediaDeviceInfo[]) {
    this.devices = [];
    for (let device of deviceInfos) {
      if (device.kind === this.kindFilter) {
        this.devices.push(device);
      }
    }
  }

  enumerateDeviceError(e) {
    console.error(e);
  }

}
