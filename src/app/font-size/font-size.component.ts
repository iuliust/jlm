import { Component, OnInit } from '@angular/core';

import { PreferencesService } from '../shared';

@Component({
  selector: 'jlm-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent implements OnInit {

  constructor(private preferences: PreferencesService) { }

  ngOnInit() {
  }

  increment() {
    this.preferences.incrementFontSize();
  }

  decrement() {
    this.preferences.decrementFontSize();
  }

  reset() {
    this.preferences.resetFontSize();
  }

}
