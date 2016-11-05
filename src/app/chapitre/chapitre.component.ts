import { Component, OnInit } from '@angular/core';

export interface Maxime {
  probleme: string;
  solution: string;
  imageUrl: string;
}

@Component({
  selector: 'jlm-chapitre',
  templateUrl: './chapitre.component.html',
  styleUrls: ['./chapitre.component.scss']
})
export class ChapitreComponent implements OnInit {
  maximes: any[] = [];

  constructor() { }

  ngOnInit() {
    let maximes: any[] = [
      {
        probleme: 'Face à la crise démocratique',
        solution: 'convoquer l’assemblée constituante de la 6ème République',
        imageUrl: '/assets/images/chapitre1.jpg'
      },
      {
        probleme: 'Face au chômage et à l’urgence sociale',
        solution: 'partager les richesses, mettre au pas la finance',
        imageUrl: '/assets/images/chapitre1.jpg'
      },
      {
        probleme: 'Face à la crise climatique',
        solution: 'la planification écologique',
        imageUrl: '/assets/images/chapitre1.jpg'
      },
      {
        probleme: 'Face à la crise européenne',
        solution: 'sortir des traités européens',
        imageUrl: '/assets/images/chapitre1.jpg'
      },
      {
        probleme: 'Face à la guerre',
        solution: 'instaurer l’indépendance de la France au service de la paix',
        imageUrl: '/assets/images/chapitre1.jpg'
      },
      {
        probleme: 'Face à la grande régression',
        solution: 'choisir l’objectif du progrès humain',
        imageUrl: '/assets/images/chapitre1.jpg'
      },
      {
        probleme: 'Face au déclinisme',
        solution: 'porter la France aux frontières de l’Humanité',
        imageUrl: '/assets/images/chapitre1.jpg'
      }
    ];
    this.maximes = maximes;
  }

}
