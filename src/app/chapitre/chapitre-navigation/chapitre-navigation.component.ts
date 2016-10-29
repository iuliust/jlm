import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jlm-chapitre-navigation',
  templateUrl: './chapitre-navigation.component.html',
  styleUrls: ['./chapitre-navigation.component.scss']
})
export class ChapitreNavigationComponent implements OnInit {
  titre: string = 'ceci est un string';

  constructor() { }

  ngOnInit() {
  }

}
