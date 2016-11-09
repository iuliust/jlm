import { Component, OnInit, Input, HostBinding } from '@angular/core';

export class Mesure {
  texte: string;
  mesures: Mesure[];
}

@Component({
  selector: 'jlm-mesure',
  templateUrl: './mesure.component.html',
  styleUrls: ['./mesure.component.scss']
})
export class MesureComponent implements OnInit {
  @Input() mesure: Mesure;
  @HostBinding('attr.nesting') @Input() niveauImbrication = 0;

  constructor() { }

  ngOnInit() { }

}
