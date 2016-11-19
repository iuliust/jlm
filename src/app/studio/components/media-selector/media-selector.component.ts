import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'jlm-media-selector',
  templateUrl: './media-selector.component.html',
  styleUrls: ['./media-selector.component.scss']
})
export class MediaSelectorComponent implements OnInit, OnDestroy {
  @Input() kindFilter: string = 'audioinput';

  @Input() selectedMedia: MediaDeviceInfo;
  @Output() selectedMediaChange: EventEmitter<MediaDeviceInfo> = new EventEmitter<MediaDeviceInfo>();

  private devices: MediaDeviceInfo[];
  private registerForm: FormGroup;
  private deviceSelectionControl: FormControl;
  private deviceSelectionControlSubscription: Subscription;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.enumerateDevices();
    this.registerForm = this.formBuilder.group({
      montruc: []
    });
    this.deviceSelectionControl = <FormControl>this.registerForm.get('montruc');
    this.deviceSelectionControlSubscription = this.deviceSelectionControl.valueChanges.subscribe((device: MediaDeviceInfo) => {
      if (!this.selectedMedia || this.selectedMedia.deviceId !== device.deviceId) {
        this.selectedMedia = device;
        this.selectedMediaChange.emit(device);
      }
    });
  }

  ngOnDestroy() {
    this.deviceSelectionControlSubscription.unsubscribe();
  }

  trackByFn(index: number, item: MediaDeviceInfo) {
    return item.deviceId;
  }

  enumerateDevices() {
    navigator.mediaDevices.enumerateDevices()
      .then(devices => this.enumerateDevicesSuccess(devices))
      .catch(error => this.enumerateDeviceError(error));
  }

  enumerateDevicesSuccess(deviceInfos: MediaDeviceInfo[]) {
    this.devices = deviceInfos.filter(device => device.kind === this.kindFilter);
  }

  enumerateDeviceError(e) {
    console.error(e);
  }

}
