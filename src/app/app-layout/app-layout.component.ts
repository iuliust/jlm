import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MdSidenav } from '@angular/material/sidenav';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';
import * as layoutActions from '../shared/actions/layout';
import * as fromRoot from '../shared/reducers';

@Component({
  selector: 'jlm-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit, AfterViewInit {
	@ViewChild('nav')
	sidenavElement: MdSidenav;
	showSidenav$: any;

  constructor(private store: Store<fromRoot.State>) { }

  ngOnInit() {
		this.showSidenav$ = this.store.let(fromRoot.getShowSidenav);
  }

	ngAfterViewInit() {
		this.sidenavElement.onOpenStart.subscribe(() => this.openSidenav());
		this.sidenavElement.onCloseStart.subscribe(() => this.closeSidenav());
	}

	openSidenav() {
		this.store.dispatch(new layoutActions.OpenSidenav());
	}

	closeSidenav() {
		this.store.dispatch(new layoutActions.CloseSidenav());
	}

	toggleSidenav() {
		this.store.dispatch(new layoutActions.ToggleSidenav());
	}

}
