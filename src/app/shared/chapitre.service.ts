import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ChapitreService {
  private cache: Map<number, any> = new Map<number, any>();

  constructor(private http: Http) { }

  getChapitre(n: number): Promise<any> {
    if ([1, 2, 3, 4, 5, 6, 7].indexOf(n) === -1) {
      throw new Error('Numéro de chapitre invalide');
    }
    const res: Object = this.cache.get(n);
    if (res !== undefined) {
      return Promise.resolve(res);
    } else {
      return this.http.get('/assets/programme/chapitre0' + n + '.json')
        .toPromise()
        .then((r: Response) => {
          const texteMinifie: string = (r.text().replace(/[\n\t]+/g, ' '));
          const chapitre: Object = JSON.parse(texteMinifie);
          this.cache.set(n, chapitre);
  				return chapitre;
        });
    }
  }

}
