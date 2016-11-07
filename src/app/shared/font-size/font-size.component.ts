import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import { AppState, Preferences, INCREMENT_FONT_SIZE, DECREMENT_FONT_SIZE, RESET_FONT_SIZE } from '../';

@Component({
  selector: 'jlm-font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent implements OnInit {
  preferences: Observable<Preferences>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.preferences = this.store.select<Preferences>('preferences');
  }

  increment() {
    this.store.dispatch({ type: INCREMENT_FONT_SIZE });
  }

  decrement() {
    this.store.dispatch({ type: DECREMENT_FONT_SIZE });
  }

  reset() {
    this.store.dispatch({ type: RESET_FONT_SIZE });
  }

}
