import { Component, ViewChild, OnInit, HostBinding } from '@angular/core';
import { MdSidenav } from '@angular/material/sidenav';
import { LayoutActions } from '../shared/actions/layout';

@Component({
  selector: 'jlm-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent implements OnInit {
	@ViewChild('nav')
	sidenavElement: MdSidenav;
	navIsOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

	public toggleSidenav(value?: boolean) {
		if (value !== undefined) {
			this.navIsOpen = value;
		} else {
			this.navIsOpen = !this.navIsOpen;
		}
		if (this.navIsOpen) {
			this.sidenavElement.open();
		} else {
			this.sidenavElement.close();
		}
	}

	closeSidenav() {
		// this.store.dispatch()
	}

}
